import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  
  public tokenStatus !: boolean;
  public marcas !: Array<string>

  constructor(
    private _service: ServiceCubos
  ){
    this.tokenStatus = false
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token != null) {
     this.tokenStatus = true 
    }
    console.log(this.tokenStatus)
    this._service.getMarcas().then(result => {
      // console.log(result)
      this.marcas = result
    })
  }

}
