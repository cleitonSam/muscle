import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AntebracosService } from '../service/antebracos.service';

@Component({
  selector: 'app-antebracos-details',
  standalone: true,
    imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './antebracos-details.component.html',
  styleUrl: './antebracos-details.component.css',
  providers: [AntebracosService],
})
export class AntebracosDetailsComponent {
 exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: AntebracosService
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
