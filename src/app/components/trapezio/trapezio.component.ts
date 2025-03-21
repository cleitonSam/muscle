import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TrapezioService } from './service/trapezio.service';

@Component({
  selector: 'app-trapezio',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './trapezio.component.html',
  styleUrl: './trapezio.component.css',
  providers: [TrapezioService]
})
export class TrapezioComponent {
exercises: any[] = [];
  filteredExercises: any[] = [];
  searchTerm: string = '';
  selectedLevel: string = ''; // Armazena o nível selecionado
  currentPage: number = 1; // Página atual
  itemsPerPage: number = 10; // Número de itens por página

  constructor(private trapezioService: TrapezioService) {}

  ngOnInit(): void {
    this.trapezioService.getExercises().subscribe((data) => {
      this.exercises = data;
      this.applyFilters(); // Aplica os filtros iniciais
    });
  }

  // Função para normalizar texto: remove acentos e caracteres especiais
  normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, '')
      .toLowerCase()
      .trim();
  }

  // Método centralizado para aplicar todos os filtros
  applyFilters(): void {
    const normalizedSearchTerm = this.normalizeText(this.searchTerm);

    // Filtra os exercícios pelo termo de busca
    let filtered = this.exercises.filter((exercise) => {
      const normalizedName = this.normalizeText(exercise.name);
      return normalizedName.includes(normalizedSearchTerm);
    });

    // Aplica o filtro de nível, se um nível for selecionado
    if (this.selectedLevel) {
      filtered = filtered.filter((exercise) => exercise.level === this.selectedLevel);
    }

    // Atualiza a lista de exercícios filtrados
    this.filteredExercises = filtered;

    // Redefine a página atual para 1 após aplicar os filtros
    this.currentPage = 1;
  }

  // Retorna os exercícios da página atual
  getPaginatedExercises(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredExercises.slice(startIndex, endIndex);
  }

  // Altera para a página anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Altera para a próxima página
  nextPage(): void {
    if (this.hasNextPage()) {
      this.currentPage++;
    }
  }

  // Verifica se há uma próxima página
  hasNextPage(): boolean {
    const totalPages = Math.ceil(this.filteredExercises.length / this.itemsPerPage);
    return this.currentPage < totalPages;
  }

  // Verifica se há uma página anterior
  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  // Calcula o número total de páginas
  get totalPages(): number {
    return Math.ceil(this.filteredExercises.length / this.itemsPerPage);
  }
}
