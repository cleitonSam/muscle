import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { GluteosService } from '../service/gluteos.service';

@Component({
  selector: 'app-gluteos-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './gluteos-details.component.html',
  styleUrl: './gluteos-details.component.css',
  providers: [GluteosService],
})
export class GluteosDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: GluteosService
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
