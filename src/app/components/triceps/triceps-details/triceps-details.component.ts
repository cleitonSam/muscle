import { Component } from '@angular/core';
import { TricepsService } from '../service/triceps.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-triceps-details',
  standalone: true,
   imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './triceps-details.component.html',
  styleUrl: './triceps-details.component.css',
  providers:[TricepsService]
})
export class TricepsDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: TricepsService
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
