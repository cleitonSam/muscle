import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BicepsService } from '../service/biceps.service';

@Component({
  selector: 'app-biceps-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './biceps-details.component.html',
  styleUrl: './biceps-details.component.css',
  providers: [BicepsService],

})
export class BicepsDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: BicepsService
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

