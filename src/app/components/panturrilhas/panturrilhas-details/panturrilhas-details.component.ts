import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PanturrilhasService } from '../service/panturrilhas.service';

@Component({
  selector: 'app-panturrilhas-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './panturrilhas-details.component.html',
  styleUrl: './panturrilhas-details.component.css',
  providers: [PanturrilhasService]
})
export class PanturrilhasDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: PanturrilhasService
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
