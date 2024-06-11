import { Injectable, inject } from '@angular/core';

import { Alumno, AlumnosLogin, CheckScore, Ejercicio, Grupo, Profesor, Puntuacion, Salas } from '../interfaces/profesor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});


  private _http=inject(HttpClient);

  constructor() { }

  nuevoProfesor(profe: Profesor){
    return this._http.post<Profesor>('https://laberintomatematicobackend.onrender.com/profesores', profe,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  loginProfesor(profe: Profesor) {
    return this._http.post<Profesor>('https://laberintomatematicobackend.onrender.com/profesores/login', profe,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  loginAlumno(alumnoLogin: AlumnosLogin) {
    return this._http.post<Alumno>('https://laberintomatematicobackend.onrender.com/alumnos/login', alumnoLogin);
  }

  nuevoGrupo(group: Grupo){
    return this._http.post<Grupo>('https://laberintomatematicobackend.onrender.com/grupos', group,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  getGrupoByProfesor(profeId: number){
    return this._http.get<Grupo[]>(`https://laberintomatematicobackend.onrender.com/grupos/profesor/${profeId}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  getGrupo(id_grupo:number){
    return this._http.get<Grupo>(`https://laberintomatematicobackend.onrender.com/grupos/${id_grupo}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  deleteGrupo(id_grupo:number){
    return this._http.delete(`https://laberintomatematicobackend.onrender.com/grupos/${id_grupo}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  updateGrupo(id_grupo:number, nombre:string) {
    return this._http.put(`https://laberintomatematicobackend.onrender.com/grupos/${id_grupo}`, {nombre},{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  newAlumno(alumno:Alumno){
    return this._http.post<Alumno>('https://laberintomatematicobackend.onrender.com/alumnos', alumno,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  deleteAlumno(id_alumno:number){
    return this._http.delete(`https://laberintomatematicobackend.onrender.com/alumnos/${id_alumno}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  updateAlumno(id_alumno:number, nombre:string) {
    return this._http.put(`https://laberintomatematicobackend.onrender.com/alumnos/${id_alumno}`, {nombre},{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  revisarPuntuacion(ch: CheckScore){
    return this._http.post<Puntuacion>('https://laberintomatematicobackend.onrender.com/puntuaciones/alumnoNivel', ch,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  actualizarPuntuacion(puntuacion: Puntuacion){
    return this._http.put(`https://laberintomatematicobackend.onrender.com/puntuaciones/${puntuacion.id}`, puntuacion,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  newPuntuacion(puntuacion: Puntuacion){
    return this._http.post<Puntuacion>('https://laberintomatematicobackend.onrender.com/puntuaciones', puntuacion,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  getEjerciciosPorNivel(nombre:string) {
    return this._http.get<Ejercicio[]>(`https://laberintomatematicobackend.onrender.com/ejercicios/nivelName/${nombre}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  changeModeGroup(sala: Salas){
    return this._http.put(`https://laberintomatematicobackend.onrender.com/salas/activar`, sala,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
}
