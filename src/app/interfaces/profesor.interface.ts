export interface Profesor {
  id: number;
  nombreCompleto: string;
  usuario: string;
  grupos?: Grupo[];
}

export interface Grupo {
  id_grupo: number;
  nombre: string;
  profesorId: number;
  salas?: Salas;
  alumnos?: Alumno[];
}

export interface Salas {
  id: number;
  active: boolean;
  gruposId?: number;
}

export interface Alumno {
  id: number;
  nombre: string;
  puntuaciones: Puntuacion[];
  grupos: Grupo;
}

export interface AlumnosLogin {
  estudianteId: number;
  grupoId: number;
}

export interface Puntuacion {
  id?: number;
  puntuacionObtenida: number;
  grupoId: number;
  alumnosId: number;
  nivel: string;
}


export interface CheckScore {
  alumnoId: number;
  nivelNombre: string;
}

export interface Ejercicio {
  id: number;
  ejercicio: string;
  niveles: Nivel;
  respuestas: Respuesta[];
}

export interface Nivel {
  id_niveles: number;
  name: string;
}

export interface Respuesta {
  id: number;
  respuestas: string;
  valor: boolean;
}
