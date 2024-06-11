import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Alumno, Grupo, Salas } from '../../interfaces/profesor.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-visualizacion-grupo',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './visualizacion-grupo.component.html',
  styleUrl: './visualizacion-grupo.component.css',
})
export class VisualizacionGrupoComponent {
  apiS = inject(ApiService);
  miGrupo: Grupo | null = null;
  listaAlumnos: Alumno[] = [];
  _activeRoute = inject(ActivatedRoute);
  _router = inject(Router);
  switchEnabled: boolean = true;
  sweet = inject(AlertService);

  constructor() {
    this._activeRoute.params.subscribe((params) => {
      // console.log(params['id']);
      this.getGrupo(params['id']);
    });
  }

  getGrupo(id: number) {
    this.apiS.getGrupo(id).subscribe((resp: Grupo) => {
      console.log(resp);
      this.miGrupo = resp;
      if (this.miGrupo && this.miGrupo.alumnos) {
        this.listaAlumnos = this.miGrupo.alumnos;
        console.log(this.listaAlumnos);
      }
      this.switchEnabled = !this.miGrupo?.salas?.active;
    });
  }

  goToRegister(id: number) {
    this._router.navigateByUrl(`registrarEstudiante/${id}`);
  }

  goToStudents(id: number) {
    this._router.navigateByUrl(`crudEstudiante/${id}`);
  }

  getPuntuacion(alumno: Alumno, dificultad: string): string {
    const puntuacion = alumno.puntuaciones.find(p => p.nivel === `${dificultad}`);
    return puntuacion ? `${puntuacion.puntuacionObtenida}/10` : '0/10';
  }


  onChangeSwitch(event: any) {
    const newValue = event.target.checked;
    console.log('Nuevo valor del interruptor:', newValue);

    if (this.miGrupo && this.miGrupo.salas) {
      const id = this.miGrupo.salas.id;
      const active = newValue;
      const mode: Salas = { id, active };

      this.apiS.changeModeGroup(mode).subscribe((resp) => {
        console.log(resp);

        if ('desactiveDate' in resp) {
          const desactiveDate = resp['desactiveDate'];

          if (typeof desactiveDate === 'string') {
            const desactiveDateObj = new Date(desactiveDate);

            if (!isNaN(desactiveDateObj.getTime())) {

              const formattedDesactiveDate = desactiveDateObj.toLocaleString();
              const message = `Fecha de desactivación: ${formattedDesactiveDate}`;
              // Mostrar el sweet alert
              this.sweet.alertOk(message);
            }
          }
        }

        if (active) {
          this.switchEnabled = false;
        }
      });
    }
  }
}
