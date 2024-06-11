import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Profesor } from '../../interfaces/profesor.interface';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-registrar-grupo',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './registrar-grupo.component.html',
  styleUrl: './registrar-grupo.component.css'
})
export class RegistrarGrupoComponent implements OnInit  {

  sweet = inject(AlertService);
  fb = inject(FormBuilder);
  apiS = inject(ApiService);
  route = inject(Router);
  activeRoute = inject(ActivatedRoute);
  formGrupo!: FormGroup;
  authService = inject(AutenticacionService);
  usuarioLogueado: Profesor | null = null;

  constructor(fb: FormBuilder) {
    this.formGrupo = this.fb.group({
      nombre: ['', [Validators.required]],
      profesorId: [0, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(usuario => {
      this.usuarioLogueado = usuario;
      if (usuario) {
        this.formGrupo.patchValue({
          profesorId: usuario.id // Asigna el ID del usuario logueado al campo profesorId
        });
      }
    });
  }

  saveGrupo() {
    if (this.formGrupo.invalid) {
      console.log('invalid');
      return;
    }

    this.apiS.nuevoGrupo(this.formGrupo.value).subscribe((data) => {
      console.log(data);
      this.formGrupo.reset();
      this.route.navigateByUrl('/crudGrupo');
      this.sweet.alert('Grupo guardado','success');
    });
  }


}
