import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profesor } from '../interfaces/profesor.interface';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private loggedIn = new BehaviorSubject<boolean>(this.checkToken());
  private usuarioLogueadoSubject = new BehaviorSubject<Profesor | null>(this.getUserFromStorage());

  constructor(private router: Router) { }

  private checkToken(): boolean {
    // Verifica si hay un token en localStorage al iniciar
    return localStorage.getItem('authToken') === 'true';
  }

  private getUserFromStorage(): Profesor | null {
    // Recupera los datos del usuario del almacenamiento local
    const usuarioString = localStorage.getItem('usuarioLogueado');
    return usuarioString ? JSON.parse(usuarioString) : null;
  }

  login(datosUsuario: Profesor) {
    this.usuarioLogueadoSubject.next(datosUsuario);
    localStorage.setItem('authToken', 'true'); // Almacena un token o una bandera en localStorage
    localStorage.setItem('usuarioLogueado', JSON.stringify(datosUsuario)); // Almacena los datos del usuario
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('authToken'); // Elimina el token o la bandera de localStorage
    localStorage.removeItem('usuarioLogueado'); // Elimina los datos del usuario
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isLoggedInSync(): boolean {
    return this.loggedIn.value;
  }

  getUser(): Observable<Profesor | null> {
    return this.usuarioLogueadoSubject.asObservable();
  }
}
