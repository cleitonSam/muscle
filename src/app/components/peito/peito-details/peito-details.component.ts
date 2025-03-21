import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PeitoService } from '../service/peito.service';

@Component({
  selector: 'app-peito-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './peito-details.component.html',
  styleUrl: './peito-details.component.css',
  providers: [PeitoService]
})
export class PeitoDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: PeitoService
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
