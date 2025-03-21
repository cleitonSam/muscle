import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { OmbroTraseiroService } from '../service/ombro-traseiro.service';

@Component({
  selector: 'app-ombro-traseiro-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './ombro-traseiro-details.component.html',
  styleUrl: './ombro-traseiro-details.component.css',
  providers: [OmbroTraseiroService]
})
export class OmbroTraseiroDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: OmbroTraseiroService
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
