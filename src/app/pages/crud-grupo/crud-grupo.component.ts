import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Grupo } from '../../interfaces/profesor.interface';
import { AutenticacionService } from '../../services/autenticacion.service';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-grupo',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './crud-grupo.component.html',
  styleUrls: ['./crud-grupo.component.css'],
})
export class CrudGrupoComponent implements OnInit {
  groupList: Grupo[] = [];
  nombreGrupo: string = '';
  grupoId: number | null = null;

  apiS = inject(ApiService);
  _router = inject(Router);
  sweet = inject(AlertService);

  constructor(private authService: AutenticacionService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((usuario) => {
      this.apiS.getGrupoByProfesor(usuario!.id).subscribe({
        next: (response: Grupo[]) => {
          this.groupList = response;
        },
      });
    });
  }

  goToDetail(id: number) {
    this._router.navigateByUrl(`visualizacion/${id}`);
  }

  deleteGroup(id: number) {
    this.sweet
      .alertQuestion('Estás a punto de eliminar este elemento. ¿Estás seguro?')
      .then((result) => {
        if (result.isConfirmed) {
          this.apiS.deleteGrupo(id).subscribe(
            () => {
              this.groupList = this.groupList.filter(
                (group) => group.id_grupo !== id
              );
              this.sweet.alert('Grupo eliminado', 'error');
            },
            (error) => {
              console.error('Error al eliminar el grupo:', error);
            }
          );
        }
      });
  }

  openEditModal(id: number, nombre: string) {
    this.grupoId = id;
    this.nombreGrupo = nombre;
  }

  guardarCambios() {
    if (this.grupoId !== null) {
      this.apiS.updateGrupo(this.grupoId, this.nombreGrupo).subscribe(
        (response) => {
          // Actualiza el grupo en la lista local
          const grupo = this.groupList.find((g) => g.id_grupo === this.grupoId);
          if (grupo) {
            grupo.nombre = this.nombreGrupo;
          }
          this.sweet.alert('Grupo actualizado', 'info');
        },
        (error) => {
          console.error('Error al actualizar el grupo:', error);
          this.sweet.alert('Error al actualizar el grupo', 'error');
        }
      );
    }
  }
}
