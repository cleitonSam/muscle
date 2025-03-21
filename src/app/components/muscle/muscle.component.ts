import { Component, OnInit } from '@angular/core';
import { MuscleService } from '../../services/muscle.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-muscle',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './muscle.component.html',
  styleUrl: './muscle.component.css',
  providers: [MuscleService],
})
export class MuscleComponent implements OnInit {
  exercises: any[] = [];
  filteredExercises: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = true; // Estado de carregamento

  constructor(private muscleService: MuscleService) {}

  ngOnInit(): void {
    this.isLoading = true; // Inicia o carregamento
    this.muscleService.getExercises().subscribe(
      (data) => {
        this.exercises = data;
        this.filteredExercises = data;
        this.isLoading = false; // Finaliza o carregamento
      },
      (error) => {
        console.error('Erro ao carregar exercícios:', error);
        this.isLoading = false; // Finaliza o carregamento em caso de erro
      }
    );
  }

  // Função para normalizar texto: remove acentos e caracteres especiais
  normalizeText(text: string): string {
    return text
      .normalize('NFD') // Decompõe os caracteres acentuados em partes básicas (ex.: "á" → "a" + "'")
      .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos (acentos)
      .replace(/[^\w\s]/g, '') // Remove caracteres especiais (pontos, vírgulas, etc.)
      .toLowerCase()
      .trim(); // Remove espaços extras no início e no fim
  }

  // Método para filtrar os músculos com base no termo de busca
  filterExercises(): void {
    const normalizedSearchTerm = this.normalizeText(this.searchTerm);

    this.filteredExercises = this.exercises.filter(exercise => {
      const normalizedName = this.normalizeText(exercise.name);
      return normalizedName.includes(normalizedSearchTerm);
    });
  }
  
}