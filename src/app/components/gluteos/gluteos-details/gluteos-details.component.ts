import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { GluteosService } from '../service/gluteos.service';
import { LoadingComponent } from '../../../loading/loading.component';
import { FormsModule } from '@angular/forms';
import { CpfMaskDirective } from '../../../directives/cpf-mask.directive';

@Component({
  selector: 'app-gluteos-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, LoadingComponent, FormsModule, CpfMaskDirective],
  templateUrl: './gluteos-details.component.html',
  styleUrl: './gluteos-details.component.css',
  providers: [GluteosService],
})
export class GluteosDetailsComponent {
exercise: any;
  isActivated: boolean = false;
  showCpfModal: boolean = false;
  cpf: string = '';
  name: string = '';
  exerciseIdToLog: number | null = null;
  newStatusToLog: string | null = null;
  history: any[] = [];
  showModal: boolean = false;
  modalMessage: string = '';
  activeTab: 'exercise' | 'history' = 'exercise';
  allExercises: any[] = [];
  currentExerciseIndex: number = 0;
  showEditModal: boolean = false;
  editData: any = {};
  isEditing: boolean = false;
  isLoading: boolean = true;
  cpfInvalido: boolean = false;
cpfValid: boolean = false
 
   constructor(
     private route: ActivatedRoute,
     private exerciseService: GluteosService,
     private router: Router
   ) {}
 
   ngOnInit(): void {
    this.loadAllExercises();
    this.loadExerciseDetails();
  }
onCpfValido(isValid: boolean): void {
  this.cpfValid = isValid;
  this.cpfInvalido = !isValid;
}
  loadAllExercises(): void {
    this.isLoading = true;
    this.exerciseService.getExercises().subscribe({
      next: (data) => {
        this.allExercises = data;
        this.setCurrentExerciseIndex();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar exercícios:', error);
        this.isLoading = false;
      }
    });
  }

  loadExerciseDetails(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const numericId = Number(id);
      this.exerciseService.getExercises().subscribe({
        next: (data) => {
          const updatedExercise = data.find((e) => e.id === numericId);
          if (updatedExercise) {
            this.exercise = updatedExercise;
            this.isActivated = this.exercise.status === 'active';
            this.loadExerciseHistory(numericId);
            this.setCurrentExerciseIndex();
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao buscar exercícios:', error);
          this.isLoading = false;
        }
      });
    }
  }

  loadExerciseHistory(exerciseId: number): void {
    this.exerciseService.getExerciseHistory(exerciseId).subscribe({
      next: (logs) => {
        this.history = logs;
      },
      error: (err) => {
        console.error('Erro ao carregar o histórico:', err);
      }
    });
  }

  setCurrentExerciseIndex(): void {
    if (this.exercise && this.allExercises.length > 0) {
      this.currentExerciseIndex = this.allExercises.findIndex(e => e.id === this.exercise.id);
    }
  }

  onToggleChange(): void {
    const newStatus = this.isActivated ? 'active' : 'inactive';
    this.exercise.status = newStatus;
    this.exerciseIdToLog = this.exercise.id;
    this.newStatusToLog = newStatus;
    this.isEditing = false;
    this.openCpfModal();
  }

  openEditModal(): void {
    this.editData = { ...this.exercise };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  saveChanges(): void {
    this.exerciseIdToLog = this.exercise.id;
    this.showEditModal = false;
    this.isEditing = true;
    this.openCpfModal();
  }

 validateCPF(cpf: string): boolean {
  const cleanCpf = cpf.replace(/\D/g, '');
  return this.cpfValid; // Usa o estado da validação da diretiva
}

  logExerciseChange(): void {
  if (!this.cpfValid) {
    alert('CPF inválido. Por favor, insira um CPF válido (11 dígitos numéricos).');
    return;
  }

  if (!this.name.trim()) {
    alert('Por favor, insira seu nome completo.');
    return;
  }

  // Atualiza o estado local imediatamente
  if (!this.isEditing) {
    this.exercise.status = this.newStatusToLog;
    this.isActivated = this.newStatusToLog === 'active';
  }

  const logData = {
    name: this.name,
    user: this.cpf,
    date: new Date().toISOString(),
    exerciseId: this.exerciseIdToLog,
    status: this.isEditing ? 'edited' : this.newStatusToLog,
  };

  this.exerciseService.registerLog(logData).subscribe({
    next: () => {
      this.closeCpfModal();
      if (this.isEditing) {
        this.updateExerciseData();
      } else {
        this.updateExerciseStatus();
      }
    },
    error: (err) => {
      console.error('Erro ao registrar log:', err);
      // Reverte a mudança local em caso de erro
      if (!this.isEditing) {
        this.isActivated = !this.isActivated;
        this.exercise.status = this.isActivated ? 'active' : 'inactive';
      }
      alert('Ocorreu um erro ao registrar. Por favor, tente novamente.');
    },
  });
}

  updateExerciseStatus(): void {
  if (!this.exerciseIdToLog || !this.newStatusToLog) return;

  this.isLoading = true;
  this.exerciseService.updateExerciseStatus(this.exerciseIdToLog, this.newStatusToLog).subscribe({
    next: (response) => {
      // Já atualizamos o estado local antes, apenas confirmamos
      this.modalMessage = `Exercício ${this.newStatusToLog === 'active' ? 'ativado' : 'desativado'} com sucesso!`;
      this.showModal = true;
      this.isLoading = false;
      setTimeout(() => {
        this.showModal = false;
      }, 2000);
    },
    error: (err) => {
      console.error('Erro na atualização:', err);
      // Reverte a mudança local em caso de erro
      this.isActivated = !this.isActivated;
      this.exercise.status = this.isActivated ? 'active' : 'inactive';
      this.modalMessage = 'Erro ao atualizar status.';
      this.showModal = true;
      this.isLoading = false;
    },
  });
}

  updateExerciseData(): void {
    this.isLoading = true;
    this.exerciseService.updateExercise(this.editData).subscribe({
      next: (updatedExercise) => {
        // Atualiza localmente primeiro
        this.exercise = { ...updatedExercise };
        this.isActivated = this.exercise.status === 'active';
        
        // Recarrega os dados completos
        this.loadExerciseDetails();
        
        this.modalMessage = 'Alterações salvas com sucesso!';
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 2000);
      },
      error: (err) => {
        console.error('Erro na atualização:', err);
        this.modalMessage = 'Erro ao salvar alterações.';
        this.showModal = true;
        this.isLoading = false;
      }
    });
  }

  openCpfModal(): void {
    this.showCpfModal = true;
  }

  closeCpfModal(): void {
    this.showCpfModal = false;
    this.cpf = '';
    this.name = '';
  }

  closeModal(): void {
    this.showModal = false;
  }

  cleanExerciseName(name: string): string {
    return name?.replace(/[^a-zA-Z0-9 ]/g, '').trim() || '';
  }

  formatText(value: string): string[] {
    return value
      ?.split(/\d+\.|\n|;/)
      .map(item => item.trim())
      .filter(item => item.length > 0) || [];
  }

  getVideoUrls(videos: string): string[] {
    return videos
      ?.split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0) || [];
  }

  switchTab(tab: 'exercise' | 'history'): void {
    this.activeTab = tab;
  }

  getStatusText(status: string): string {
    const statusMap: {[key: string]: string} = {
      'active': 'Ativado',
      'inactive': 'Desativado',
      'edited': 'Editado'
    };
    return statusMap[status] || status;
  }
}