import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import Cubo from '../../models/cubo';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit{
  public cubos !: Array<Cubo>
  @ViewChild ("selectcubo") selectCubo!: ElementRef

  constructor(
    private _service : ServiceCubos
  ){}
  ngOnInit(): void {
    this._service.getCubos().then(response => {
      // console.log(response)
      this.cubos = response;
    })
  }

  comprarCubo():void {
    let idCubo = parseInt(this.selectCubo.nativeElement.value);
    this._service.insertPedido(idCubo).then(response =>{
      console.log(response)
    })
  }

}
