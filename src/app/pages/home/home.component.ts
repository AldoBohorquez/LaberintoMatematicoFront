import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumno, AlumnosLogin } from '../../interfaces/profesor.interface';
import { AutenticacionAlumnoService } from '../../services/autenticacion-alumno.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  route = inject(Router);
  apiS = inject(ApiService);
  sweet = inject(AlertService);
  authService = inject(AutenticacionAlumnoService);
  constructor() {}

  onSubmit(form: any) {
    const estudianteId = form.estudianteId;
    const grupoId = form.grupoId;

    const alumnoLogin: AlumnosLogin = { estudianteId, grupoId };

    this.apiS.loginAlumno(alumnoLogin).subscribe(
      (response: Alumno) => {
        console.log('Alumno y grupo existente', response);

        if (response.grupos.salas?.active === true) {
          this.authService.login(response);
          this.route.navigateByUrl('/section');
        } else{
          this.sweet.alertCenter('El grupo no esta activo');
        }
      },
      (error) => {
        console.error('Error en el login de alumno:', error);
        this.sweet.alert('Usuario o grupo incorrecto', "error");
      }
    );
  }




}
