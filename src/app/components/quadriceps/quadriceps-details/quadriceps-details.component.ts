import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { QuadricepsService } from '../service/quadriceps.service';
import { LoadingComponent } from '../../../loading/loading.component';
import { FormsModule } from '@angular/forms';
import { CpfMaskDirective } from '../../../directives/cpf-mask.directive';

@Component({
  selector: 'app-quadriceps-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, LoadingComponent, FormsModule, CpfMaskDirective],
  templateUrl: './quadriceps-details.component.html',
  styleUrl: './quadriceps-details.component.css',
  providers: [QuadricepsService]
})
export class QuadricepsDetailsComponent {
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
 
   constructor(
     private route: ActivatedRoute,
     private exerciseService: QuadricepsService,
     private router: Router
   ) {}
 
   ngOnInit(): void {
     this.loadAllExercises();
     this.loadExerciseDetails();
   }

   onCpfValido(valido: boolean): void {
    this.cpfInvalido = !valido;
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
           this.exercise = data.find((e) => e.id === numericId);
           if (this.exercise) {
             // CORREÇÃO PRINCIPAL: Garantir que isActivated reflita o status correto
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
     // Atualiza o status do exercício localmente imediatamente
     const newStatus = this.isActivated ? 'active' : 'inactive';
     this.exercise.status = newStatus;
     
     // Prepara os dados para o log
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
 
   
 
   logExerciseChange(): void {
     
   
     if (!this.name.trim()) {
       alert('Nome inválido. Por favor, insira seu nome.');
       return;
     }
   
     const logData = {
       name: this.name,
       user: this.cpf,
       date: new Date().toLocaleString(),
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
         alert('Erro ao registrar o log. Por favor, tente novamente.');
       },
     });
   }
 
   updateExerciseStatus(): void {
     if (!this.exerciseIdToLog || !this.newStatusToLog) return;
 
     this.exerciseService.updateExerciseStatus(this.exerciseIdToLog, this.newStatusToLog).subscribe({
       next: (response) => {
         // Atualiza o status no objeto local
         this.exercise.status = this.newStatusToLog;
         this.modalMessage = this.isActivated ? 'Ativado com sucesso!' : 'Desativado com sucesso!';
         this.showModal = true;
         setTimeout(() => {
           this.showModal = false;
           this.router.navigate(['/Quadríceps']);
         }, 2000);
       },
       error: (err) => {
         console.error('Falha na atualização:', err);
         // Reverte o toggle em caso de erro
         this.isActivated = !this.isActivated;
         this.exercise.status = this.isActivated ? 'active' : 'inactive';
       },
     });
   }
 
   updateExerciseData(): void {
     this.exerciseService.updateExercise(this.editData).subscribe({
       next: (response) => {
         // Atualiza o exercício local com os novos dados
         this.exercise = { ...this.editData };
         // Garante que o toggle está sincronizado
         this.isActivated = this.exercise.status === 'active';
         
         this.modalMessage = 'Alterações salvas com sucesso!';
         this.showModal = true;
         setTimeout(() => {
           this.showModal = false;
         }, 2000);
       },
       error: (err) => {
         console.error('Falha na atualização:', err);
         this.modalMessage = 'Erro ao salvar as alterações.';
         this.showModal = true;
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
     this.router.navigate(['/Quadríceps']);
   }
 
   cleanExerciseName(name: string): string {
     return name.replace('', '').replace('', '').trim();
   }
 
   formatText(value: string): string[] {
     return value
       ? value
           .split(/\d+\.|\n|;/)
           .map((item) => item.trim())
           .filter((item) => item.length > 0)
       : [];
   }
 
   getVideoUrls(videos: string): string[] {
     return videos
       .split('\n')
       .map((url) => url.trim())
       .filter((url) => url.length > 0);
   }
 
   switchTab(tab: 'exercise' | 'history'): void {
     this.activeTab = tab;
   }
 
   getStatusText(status: string): string {
     switch(status) {
       case 'active': return 'Ativado';
       case 'inactive': return 'Desativado';
       case 'edited': return 'Editado';
       default: return status;
     }
   }
 }