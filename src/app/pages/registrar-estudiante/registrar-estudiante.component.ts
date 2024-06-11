import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent {
  idGrupo: number = 0;
  _activeRoute = inject(ActivatedRoute);
  sweet = inject(AlertService);
  fb = inject(FormBuilder);
  apiS = inject(ApiService);
  route = inject(Router);
  formAlumno!: FormGroup;

  constructor(fb: FormBuilder){
    this.formAlumno = this.fb.group({
      nombre: ['', [Validators.required]],
      gruposId: [0, [Validators.required]]
    });

    this._activeRoute.params.subscribe(params => {
      this.idGrupo = params['id'];
      console.log(this.idGrupo);
      this.formAlumno.patchValue({
        gruposId: this.idGrupo
      });
    });
  }

  saveEstudiante() {
    if (this.formAlumno.invalid) {
      console.log('invalid');
      return;
    }

    this.apiS.newAlumno(this.formAlumno.value).subscribe((data) => {
      console.log(data);
      this.formAlumno.reset();
      this.route.navigateByUrl(`/visualizacion/${this.idGrupo}`);
      this.sweet.alert('Estudiante guardado', 'success');
    })

  }
}
