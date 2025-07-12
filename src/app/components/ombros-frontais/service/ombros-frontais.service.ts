import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmbrosFrontaisService {
private sheetyApiUrl = 'https://api.steinhq.com/v1/storages/6872ee9cc088333365b81601/ombrosFrontais';
private historyApiUrl = 'https://api.steinhq.com/v1/storages/6872ee9cc088333365b81601/usuario';

 constructor(private http: HttpClient ) {}

  /**
   * GET: Busca todos os exercícios.
   */
  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.sheetyApiUrl );
  }

  /**
   * PUT: Atualiza um exercício existente.
   * A condição (WHERE) e os dados (SET) são enviados no corpo da requisição.
   */
  updateExercise(exerciseData: any): Observable<any> {
    const url = this.sheetyApiUrl; // A URL para PUT é a URL base da planilha.
    
    const payload = {
      condition: { id: exerciseData.id }, // CONDIÇÃO: Onde a coluna 'id' é igual a exerciseData.id
      set: exerciseData                  // DADOS: O que deve ser atualizado
    };

    return this.http.put(url, payload );
  }

  /**
   * PUT: Atualiza apenas o status de um exercício.
   */
  updateExerciseStatus(id: number, status: string): Observable<any> {
    const url = this.sheetyApiUrl;
    
    const payload = {
      condition: { id: id },     // CONDIÇÃO: Onde a coluna 'id' é igual ao id fornecido
      set: { status: status }    // DADOS: Altere apenas a coluna 'status'
    };

    return this.http.put(url, payload );
  }

  /**
   * POST: Registra um novo log na planilha 'usuario'.
   * O payload para POST deve ser um ARRAY de objetos.
   */
  registerLog(logData: any): Observable<any> {    
    const payload = [logData]; 
    return this.http.post(this.historyApiUrl, payload );
  }

  /**
   * GET: Busca o histórico de alterações de um exercício específico.
   */
  getExerciseHistory(exerciseId: number): Observable<any[]> {
    return this.http.get<any[]>(this.historyApiUrl ).pipe(
      // Filtra os logs para retornar apenas os que correspondem ao ID do exercício.
      map(logs => logs.filter(log => log.id_exercicio == exerciseId))
    );
  }
} 