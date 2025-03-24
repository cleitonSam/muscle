import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TrapezioService } from '../service/trapezio.service';

@Component({
  selector: 'app-trapezio-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './trapezio-details.component.html',
  styleUrl: './trapezio-details.component.css',
  providers: [TrapezioService]
})
export class TrapezioDetailsComponent {
exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: TrapezioService
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