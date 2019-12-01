import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KmellappService {
  serverUrl = 'http://localhost:3000';
  almacenamiento: any;

  constructor( private http: HttpClient) { }

  getProfesion(id: string) {
    return this.http.get<any[]>(`${this.serverUrl}/profesion/${id}`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
      );
  }
  

  recibirDatos(datos: any) {
    this.almacenamiento = datos;
    console.log('recibir', this.almacenamiento);
  }
  
enviarDatos() {
  return this.almacenamiento;
}

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred ${ err.error.message }`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is:   ${err.message}`;
  } console.log(errorMessage);
    return throwError(errorMessage);
  }
}
