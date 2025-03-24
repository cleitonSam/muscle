import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ObliqueService } from '../service/oblique.service';

@Component({
  selector: 'app-oblique-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './oblique-details.component.html',
  styleUrl: './oblique-details.component.css',
  providers: [ObliqueService]
})
export class ObliqueDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ObliqueService
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
