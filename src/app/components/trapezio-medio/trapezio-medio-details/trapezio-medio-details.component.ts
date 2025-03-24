import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TrapezioMedioService } from '../service/trapezio-medio.service';

@Component({
  selector: 'app-trapezio-medio-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './trapezio-medio-details.component.html',
  styleUrl: './trapezio-medio-details.component.css',
  providers: [TrapezioMedioService]
})
export class TrapezioMedioDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: TrapezioMedioService
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
