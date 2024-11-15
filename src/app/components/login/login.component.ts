import { Component, ElementRef, ViewChild } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Router } from '@angular/router';
import Login from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild("cajausername") cajaUsername!: ElementRef
  @ViewChild("cajapassword") cajaPassword!: ElementRef

  constructor (
    private _service :ServiceCubos,
    private _router: Router
  ){}

  login():void{
    let userName = this.cajaUsername.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName,password);

    this._service.authLogin(login).then(result => {
      let token = result.data.response
      // console.log(token)
      localStorage.setItem("token", token);
      this._router.navigate(["/"]);
    })
    
  }
}
