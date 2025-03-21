import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosteriorCoxaService {
private jsonUrl = 'assets/Mock/Hamstrings/hamstrings.json';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
