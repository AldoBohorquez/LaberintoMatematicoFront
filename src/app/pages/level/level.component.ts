import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  _route = inject(Router);
  _activeRoute = inject(ActivatedRoute);
  setLevel(level:string) {
    this._activeRoute.params.subscribe(params => {
      const section=params['section'];
      // console.log(`${section}${level}`)
      this._route.navigateByUrl(`personajes/${level}-${section}`);
    })
  }
}
