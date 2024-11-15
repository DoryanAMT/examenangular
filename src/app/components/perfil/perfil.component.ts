import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public perfil !: Usuario

  constructor(
    private _service : ServiceCubos
  ){}
  ngOnInit(): void {
    this._service.getPerfil().then(result => {
      // console.log(result)
      this.perfil = result
    })
  }

}
