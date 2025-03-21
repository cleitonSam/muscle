import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbdomenService {
  private jsonUrl = 'assets/Mock/Abdomen/abdomen.json';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
