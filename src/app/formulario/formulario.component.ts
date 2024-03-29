import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'ingresoOperacion';
  descripcionInput:string;
  valorInput:number;

  constructor( private ingresoService: IngresoServicio,
               private egresoService: EgresoServicio ) { }

  ngOnInit(): void {
  }

  tipoOperacion( event ) {
    this.tipo = event.target.value;
  }

  agregarValor() {
  
    if ( this.tipo === 'ingresoOperacion' ) {
      this.ingresoService.ingresos.push( new Ingreso( this.descripcionInput, this.valorInput ) );
    } else {
      this.egresoService.egresos.push( new Egreso( this.descripcionInput, this.valorInput ) );
    }

  }

}
