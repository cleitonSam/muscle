import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CpfMaskDirective } from '../../../directives/cpf-mask.directive';
import { LoadingComponent } from '../../../loading/loading.component';
import { TrapezioService } from '../service/trapezio.service';

@Component({
  selector: 'app-trapezio-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    LoadingComponent,
    CpfMaskDirective
  ],
  templateUrl: './trapezio-details.component.html',
  styleUrls: ['./trapezio-details.component.css'],
  providers: [TrapezioService]
} )
export class TrapezioDetailsComponent implements OnInit {
  // --- Estado do Componente ---
  exercise: any;
  allExercises: any[] = [];
  history: any[] = [];
  isLoading: boolean = true;
  isActivated: boolean = false;
  currentExerciseIndex: number = -1;

  // --- Controle de Modais e Abas ---
  activeTab: 'exercise' | 'history' = 'exercise';
  showCpfModal: boolean = false;
  showEditModal: boolean = false;
  showModal: boolean = false;
  modalMessage: string = '';

  // --- Dados de Formulários e Logs ---
  cpf: string = '';
  name: string = '';
  cpfValid: boolean = false;
  cpfInvalido: boolean = false;
  isEditing: boolean = false;
  editData: any = {};
  exerciseIdToLog: number | null = null;
  newStatusToLog: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: TrapezioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.isLoading = true;
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      this.handleError('ID do exercício não encontrado na rota.');
      this.router.navigate(['/']);
      return;
    }

    const numericId = Number(idParam);

    this.exerciseService.getExercises().subscribe({
      next: (data) => {
        this.allExercises = data;
        this.exercise = this.allExercises.find(e => e.id == numericId);

        if (this.exercise) {
          this.isActivated = this.exercise.status === 'active';
          this.currentExerciseIndex = this.allExercises.findIndex(e => e.id == numericId);
          this.loadExerciseHistory(this.exercise.id);
        } else {
          this.handleError(`Exercício com ID ${numericId} não foi encontrado.`);
          this.router.navigate(['/']);
        }
        this.isLoading = false;
      },
      error: (error) => this.handleError('Erro ao buscar dados dos exercícios.', error)
    });
  }

  loadExerciseHistory(exerciseId: number): void {
    this.exerciseService.getExerciseHistory(exerciseId).subscribe({
      next: (logs) => { this.history = logs; },
      error: (err) => this.handleError('Erro ao carregar o histórico.', err)
    });
  }

  onCpfValido(isValid: boolean): void {
    this.cpfValid = isValid;
    this.cpfInvalido = !isValid;
  }

  onToggleChange(): void {
    this.isEditing = false;
    this.newStatusToLog = this.isActivated ? 'active' : 'inactive';
    this.exerciseIdToLog = this.exercise.id;
    this.openCpfModal();
  }

  openEditModal(): void {
    this.editData = { ...this.exercise };
    this.showEditModal = true;
  }

  saveChanges(): void {
    this.isEditing = true;
    this.exerciseIdToLog = this.editData.id;
    this.closeEditModal();
    this.openCpfModal();
  }

  logExerciseChange(): void {
    if (!this.cpfValid) {
      alert('CPF inválido. Por favor, verifique o número digitado.');
      return;
    }
    if (!this.name.trim()) {
      alert('Por favor, insira seu nome completo.');
      return;
    }

    const logData = {
      nome: this.name,
      cpf: this.cpf,
      data: new Date().toISOString(),
      id_exercicio: this.exerciseIdToLog,
      status: this.isEditing ? 'edited' : this.newStatusToLog,
    };

    this.isLoading = true;
    this.exerciseService.registerLog(logData).subscribe({
      next: () => {
        this.closeCpfModal();
        if (this.isEditing) {
          this.updateExerciseData();
        } else {
          this.updateExerciseStatus();
        }
      },
      error: (err) => this.handleError('Erro ao registrar o log. Tente novamente.', err)
    });
  }

  updateExerciseStatus(): void {
    if (this.exerciseIdToLog === null || this.newStatusToLog === null) return;

    this.exerciseService.updateExerciseStatus(this.exerciseIdToLog, this.newStatusToLog).subscribe({
      next: () => {
        this.exercise.status = this.newStatusToLog;
        this.isActivated = this.exercise.status === 'active';
        this.showSuccessModal(`Exercício ${this.newStatusToLog === 'active' ? 'ativado' : 'desativado'}!`);
      },
      error: (err) => this.handleError('Erro ao atualizar o status.', err)
    });
  }

  updateExerciseData(): void {
    this.exerciseService.updateExercise(this.editData).subscribe({
      next: () => {
        this.exercise = { ...this.editData };
        this.isActivated = this.exercise.status === 'active';
        this.showSuccessModal('Alterações salvas com sucesso!');
      },
      error: (err) => this.handleError('Erro ao salvar as alterações.', err)
    });
  }

  // --- Métodos de UI e Helpers ---

  handleError(message: string, error?: any): void {
    console.error(message, error || '');
    this.modalMessage = message;
    this.showModal = true;
    this.isLoading = false;
  }

  showSuccessModal(message: string): void {
    this.modalMessage = message;
    this.showModal = true;
    this.isLoading = false;
    setTimeout(() => this.closeModal(), 2000);
  }

  openCpfModal(): void { this.showCpfModal = true; }
  closeCpfModal(): void {
    this.showCpfModal = false;
    this.cpf = '';
    this.name = '';
  }

  closeEditModal(): void { this.showEditModal = false; }
  closeModal(): void { this.showModal = false; }

  switchTab(tab: 'exercise' | 'history'): void { this.activeTab = tab; }

  formatText(value: string): string[] {
    if (!value) return [];
    return value.split(/\d+\.|\n|;/).map(item => item.trim()).filter(item => item.length > 0);
  }

  getVideoUrls(videos: string): string[] {
    if (!videos) return [];
    return videos.split('\n').map(url => url.trim()).filter(url => url.length > 0);
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'active': 'Ativado',
      'inactive': 'Desativado',
      'edited': 'Editado'
    };
    return statusMap[status] || status;
  }
}
