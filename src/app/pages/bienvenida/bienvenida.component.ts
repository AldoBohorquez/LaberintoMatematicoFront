import { Component, OnInit, inject } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Grupo, Profesor } from '../../interfaces/profesor.interface';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit {
  usuarioLogueado: Profesor | null = null;
  _router = inject (Router);
  apiS = inject(ApiService);

  groupList: Grupo[]=[];

  constructor(private authService: AutenticacionService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(usuario => {
      this.usuarioLogueado = usuario;
      this.apiS.getGrupoByProfesor(usuario!.id).subscribe(
        {
          next: (response: Grupo[]) => {
            this.groupList = response;
          }
        }
      )
    });
  }

  goToDetail(id: number){
    this._router.navigateByUrl(`visualizacion/${id}`);
  }
}
