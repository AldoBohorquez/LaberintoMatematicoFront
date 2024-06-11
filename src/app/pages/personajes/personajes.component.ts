import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  _route = inject(Router);
  _activeRoute = inject(ActivatedRoute);

  setPersonaje(personaje:string) {
    this._activeRoute.params.subscribe(params => {
      const nivel=params['nivel'];
      // console.log(`${personaje}/${nivel}`)
      this._route.navigateByUrl(`game/${personaje}/${nivel}`);
    })
  }

}
