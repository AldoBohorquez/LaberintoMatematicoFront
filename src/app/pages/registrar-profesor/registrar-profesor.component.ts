import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-registrar-profesor',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './registrar-profesor.component.html',
  styleUrl: './registrar-profesor.component.css',
})
export class RegistrarProfesorComponent {
  sweet = inject(AlertService);
  fb = inject(FormBuilder);
  apiS = inject(ApiService);
  route = inject(Router);
  activeRoute = inject(ActivatedRoute);
  formProduct!: FormGroup;

  constructor(fb: FormBuilder) {
    this.formProduct = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  saveProfesor() {
    if (this.formProduct.invalid) {
      console.log('invalid');
      return;
    }

    this.apiS.nuevoProfesor(this.formProduct.value).subscribe((data) => {
      console.log(data);
      this.formProduct.reset();
      this.route.navigateByUrl('/loginProfesor');
      this.sweet.alert('Información de usuario guardada exitosamente', 'success');
    });
  }
}
