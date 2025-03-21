import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MaosService } from '../service/maos.service';

@Component({
  selector: 'app-maos-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './maos-details.component.html',
  styleUrl: './maos-details.component.css',
  providers:[MaosService]
})
export class MaosDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: MaosService
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
