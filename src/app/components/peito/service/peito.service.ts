import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeitoService {
private jsonUrl = 'assets/Mock/Chest/chest.json';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}