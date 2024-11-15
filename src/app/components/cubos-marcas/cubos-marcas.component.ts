import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import Cubo from '../../models/cubo';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cubos-marcas',
  templateUrl: './cubos-marcas.component.html',
  styleUrl: './cubos-marcas.component.css'
})
export class CubosMarcasComponent implements OnInit {
  public cubos!: Array<Cubo>
  public marca!: string

  constructor(
    private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {

  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let marca = params["marca"];
      this.marca = marca;
      this._service.getCubosMarca(marca).then(response => {
        // console.log(response)
        this.cubos = response

      })
    })
  }
}
