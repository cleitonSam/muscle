import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { InferiorCostasService } from '../service/inferior-costas.service';

@Component({
  selector: 'app-inferior-costas-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './inferior-costas-details.component.html',
  styleUrl: './inferior-costas-details.component.css',
  providers: [InferiorCostasService],
})
export class InferiorCostasDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: InferiorCostasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercises().subscribe(data => {
      this.exercise = data.find(e => e.id === id);
    });
  }

  // Função para limpar o nome do exercício
cleanExerciseName(name: string): string {
  return name.replace('Exercício:', '').replace('Texto:', '').trim();
}
}