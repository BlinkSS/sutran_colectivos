import { Injectable } from '@angular/core';
import { GobiernoSubnacional } from '../interfaces/gobiernoSubnacional';

@Injectable({
  providedIn: 'root'
})
export class GobiernoSubnacionalService {

  listgobiernoSubnacional: GobiernoSubnacional[] = [
    {departamento: "LIMA", provincia: 'LIMA', distrito:"LINCE", tipoGobierno: 'PROVINCIA'},
    {departamento: "LIMA", provincia: 'LIMA', distrito:"SAN ISIDRO", tipoGobierno: 'DISTRITO'},
    {departamento: "LIMA", provincia: 'LIMA', distrito:"SAN ISIDRO", tipoGobierno: 'DISTRITO'},
    {departamento: "LIMA", provincia: 'LIMA', distrito:"SAN ISIDRO", tipoGobierno: 'DISTRITO'},
    {departamento: "LIMA", provincia: 'LIMA', distrito:"SAN ISIDRO", tipoGobierno: 'DISTRITO'},
    {departamento: "LIMA", provincia: 'LIMA', distrito:"PUEBLO LIBRE", tipoGobierno: 'PROVINCIA'},
    {departamento: "LA LIBERTAD", provincia: 'TRUJILLO', distrito:"TRUJILLO", tipoGobierno: 'DISTRITO'},
    {departamento: "ICA", provincia: 'ICA', distrito:"ICA", tipoGobierno: 'PROVINCIA'}
  ]

  constructor() { }

  getGobiernoSubnacional()
  {
    return this.listgobiernoSubnacional.slice();
  }

  eliminarGobiernoSubnacional(index:number)
  {
    this.listgobiernoSubnacional.splice(index,1)
  }

  agregarUsuario (gobiernoSubnacional: GobiernoSubnacional){
    this.listgobiernoSubnacional.unshift(gobiernoSubnacional);
  }



}
