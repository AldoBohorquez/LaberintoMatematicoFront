import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(msn:string, icon: 'error'|'info'|'question'|'success'|'warning'){
    Swal.fire({
      text: msn,
      icon: icon,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertCenter(msn:string){
    Swal.fire({
      text: msn,
      icon: 'warning',
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertOk(msn:string){
    Swal.fire({
      text: msn,
      icon: 'info',
      position: 'center',
      confirmButtonText: 'Ok',
    })
  }

  alertQuestion( message: string){
    return Swal.fire({
      icon: 'question',
      text: message,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      confirmButtonColor: '#d33'
    });

  }
}
