import { Injectable } from '@angular/core';
import { Empresas } from '../interfaces/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  listempresas: Empresas[] = [
    {ruc: "234234234234", descripcion: 'TRANSPORTE A', estado: 'ACTIVO', estadoRutaAutorizada : 'HABILITADO'},
    {ruc: "3343243534534", descripcion: 'TRANSPORTE LIMA', estado: 'ACTIVO', estadoRutaAutorizada : 'VENCIDO'},
    {ruc: "23434343434", descripcion: 'TRANSPORTE ICA', estado: 'INACTIVO', estadoRutaAutorizada : 'SUSPENDIDO'},
    {ruc: "1122344444", descripcion: 'TRANSPORTE TRUJILLO', estado: 'ACTIVO', estadoRutaAutorizada : 'CANCELADO'},
    {ruc: "1123675433", descripcion: 'TRANSPORTE ABC', estado: 'INACTIVO', estadoRutaAutorizada : 'HABILITADO'},
    {ruc: "1234567754", descripcion: 'TRANSPORTE A132', estado: 'ACTIVO', estadoRutaAutorizada : 'HABILITADO'},
  ]

  constructor() { }

  getEmpresas()
  {
    return this.listempresas.slice();
  }

  eliminarEmpresas(index:number)
  {
    this.listempresas.splice(index,1)
  }

  agregarEmpresas (rutas: Empresas){
    this.listempresas.unshift(rutas);
  }
}