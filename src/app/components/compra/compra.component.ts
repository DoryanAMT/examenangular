import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import producto from '../../models/producto';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit{
  public productos !: Array<producto>
  constructor(
    private _service: ServiceCubos
  ){}
  ngOnInit(): void {
    this._service.getCompras().then(result => {
      this.productos = result
      console.log(result)
    })
  }
}
