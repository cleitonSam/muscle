import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AbdomenService } from '../service/abdomen.service';

@Component({
  selector: 'app-abdomen-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './abdomen-details.component.html',
  styleUrl: './abdomen-details.component.css',
 providers: [AbdomenService],
})
export class AbdomenDetailsComponent implements OnInit {
  exercise: any;

  constructor(
    private route: ActivatedRoute,
    private exerciseService: AbdomenService
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
