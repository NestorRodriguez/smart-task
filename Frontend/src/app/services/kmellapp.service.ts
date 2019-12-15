import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KmellappService {
  serverUrl = 'https://kmellap.azurewebsites.net/api/v1.0';
  // serverUrl = 'http://192.168.0.26:3000/api/v1.0';

  almacenamiento: any;

  constructor( private http: HttpClient) { }

  getQuery(ruta: string) {
    return this.http.get<any[]>(`${this.serverUrl}/${ruta}`).pipe(
      tap(data => console.log('data')),
      catchError(this.handleError)
      );
  }
  getQueryParam(ruta: string, id: string) {
    return this.http.get<any[]>(`${this.serverUrl}/${ruta}/${id}`).pipe(
      tap(data => console.log('data')),
      catchError(this.handleError)
      );
  }

  recibirDatos(datos: any) {
    this.almacenamiento = datos;
    console.log('recibir', this.almacenamiento);
  }

  postData(ruta: string, body: any) {
    console.log('body', body);
    return this.http.post<any[]>(`${this.serverUrl}/${ruta}`, body).pipe(
    tap(data => console.log('data')),
    catchError(this.handleError)
    );
  }
  putData(ruta: string, body: any) {
    console.log('body');
    return this.http.put<any[]>(`${this.serverUrl}/${ruta}`, body).pipe(
    tap(data => console.log('data')),
    catchError(this.handleError)
    );
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
