import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BicepsService {
private jsonUrl = 'assets/Mock/Biceps/biceps.json';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
