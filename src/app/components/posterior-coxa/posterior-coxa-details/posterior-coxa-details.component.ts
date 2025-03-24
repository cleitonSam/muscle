import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PosteriorCoxaService } from '../service/posterior-coxa.service';

@Component({
  selector: 'app-posterior-coxa-details',
  standalone: true,
   imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './posterior-coxa-details.component.html',
  styleUrl: './posterior-coxa-details.component.css',
  providers: [PosteriorCoxaService]
})
export class PosteriorCoxaDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: PosteriorCoxaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exerciseService.getExercises().subscribe(data => {
      this.exercise = data.find(e => e.id === id);
    });
  }

  // Função para limpar o nome do exercício
cleanExerciseName(name: string): string {
  return name.replace('', '').replace('', '').trim();
}
}
