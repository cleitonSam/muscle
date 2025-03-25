import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InferiorCostasService {
private sheetyApiUrl = 'https://api.sheety.co/129fd1f83f6798ca5c4ea7b7cf138bed/muscleInferiorCostas/costas';
private historyApiUrl = 'https://api.sheety.co/129fd1f83f6798ca5c4ea7b7cf138bed/muscleInferiorCostas/usuario';

constructor(private http: HttpClient) {}

getExercises(): Observable<any[]> {
  return this.http.get<{ costas: any[] }>(this.sheetyApiUrl).pipe(
    map(response => response.costas)
  );
}

updateExerciseStatus(id: number, status: string): Observable<any> {
  const url = `${this.sheetyApiUrl}/${id}`;
  
  const payload = {
    costa: {
      id: id,
      status: status
    }
  };

  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.put(url, payload, { headers });
}

updateExercise(exerciseData: any): Observable<any> {
  const url = `${this.sheetyApiUrl}/${exerciseData.id}`;
  
  const payload = {
    costas: exerciseData 
  };

  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.put(url, payload, { headers });
}

registerLog(logData: any): Observable<any> {    
  const payload = {
    usuario: logData
  };

  return this.http.post(this.historyApiUrl, payload, {
    headers: { 'Content-Type': 'application/json' },
  });
}

getExerciseHistory(exerciseId: number): Observable<any[]> {
  return this.http.get<{ usuario: any[] }>(this.historyApiUrl).pipe(
    map(response => response.usuario.filter(log => log.exerciseId === exerciseId))
  );
}
}