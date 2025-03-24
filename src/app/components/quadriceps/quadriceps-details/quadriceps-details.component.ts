import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { QuadricepsService } from '../service/quadriceps.service';

@Component({
  selector: 'app-quadriceps-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './quadriceps-details.component.html',
  styleUrl: './quadriceps-details.component.css',
  providers: [QuadricepsService]
})
export class QuadricepsDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: QuadricepsService
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