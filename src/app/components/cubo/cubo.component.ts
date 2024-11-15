import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import Cubo from '../../models/cubo';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrl: './cubo.component.css'
})
export class CuboComponent implements OnInit{
  public cubo !: Cubo
  constructor(
    private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {

    this._activeRoute.params.subscribe((params: Params) => {
      let id = params["id"];
      if (id == "") {
        console.log("cargando...")
      }else{
        this._service.getCubosId(id).then(response => {
          this.cubo = response
          // console.log(response)
  
        })
      }
      
    })
  }
  
}
