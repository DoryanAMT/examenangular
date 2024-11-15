import { Component, ElementRef, ViewChild } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Router, TitleStrategy } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild ("nombre") cajanombre !: ElementRef
  @ViewChild ("email") cajaemail !: ElementRef
  @ViewChild ("pass") cajapass !: ElementRef

  constructor(
    private _service :ServiceCubos,
    private _router: Router
  ){}

  registerUsuario(): void{
    let idUsuario = 0
    let nombre = this.cajanombre.nativeElement.value
    let email = this.cajaemail.nativeElement.value
    let pass = this.cajapass.nativeElement.value

    let newUsuario = new Usuario(idUsuario,nombre,email,pass);
    
    this._service.insertUsuario(newUsuario).then(result => {
      this._router.navigate(['/perfil'])
    })
  }


}
