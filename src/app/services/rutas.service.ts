import { Injectable } from '@angular/core';
import { Rutas } from '../interfaces/rutas';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  listrutas: Rutas[] = [
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"LINCE", destino: 'PROVINCIA'},
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"SAN ISIDRO", destino: 'DISTRITO'},
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"SAN ISIDRO", destino: 'DISTRITO'},
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"SAN ISIDRO", destino: 'DISTRITO'},
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"SAN ISIDRO", destino: 'DISTRITO'},
    {codigoRuta: "LIMA", origen: 'LIMA', itinerario:"PUEBLO LIBRE", destino: 'PROVINCIA'},
    {codigoRuta: "LA LIBERTAD", origen: 'TRUJILLO', itinerario:"TRUJILLO", destino: 'DISTRITO'},
    {codigoRuta: "ICA", origen: 'ICA', itinerario:"ICA", destino: 'PROVINCIA'}
  ]

  constructor() { }

  getRutas()
  {
    return this.listrutas.slice();
  }

  eliminarRutas(index:number)
  {
    this.listrutas.splice(index,1)
  }

  agregarRutas (rutas: Rutas){
    this.listrutas.unshift(rutas);
  }
}
