import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { OmbrosFrontaisService } from '../service/ombros-frontais.service';

@Component({
  selector: 'app-ombros-frontais-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './ombros-frontais-details.component.html',
  styleUrl: './ombros-frontais-details.component.css',
  providers: [OmbrosFrontaisService]
})
export class OmbrosFrontaisDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: OmbrosFrontaisService
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
