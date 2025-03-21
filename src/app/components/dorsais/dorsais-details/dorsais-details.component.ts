import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DorsaisService } from '../service/dorsais.service';

@Component({
  selector: 'app-dorsais-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './dorsais-details.component.html',
  styleUrl: './dorsais-details.component.css',
  providers: [DorsaisService],
})
export class DorsaisDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: DorsaisService
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
