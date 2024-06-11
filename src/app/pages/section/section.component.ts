import { Component, inject } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  _router = inject (Router);


  goToPage(tipo: string){
    this._router.navigateByUrl(`level/${tipo}`);
  }

}
