import { Injectable } from '@angular/core';
import { Resolucion } from '../interfaces/resolucion';

@Injectable({
  providedIn: 'root'
})
export class ResolucionService {

  listresolucion: Resolucion[] = [
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'PROVINCIAL', estado: 'ACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'DISTRITAL', estado: 'ACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'DISTRITAL', estado: 'ACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'DISTRITAL', estado: 'ACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'DISTRITAL', estado: 'INACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'PROVINCIAL', estado: 'ACTIVO'},
    {fechaEmision: "02/10/2000", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'DISTRITAL', estado: 'ACTIVO'},
    {fechaEmision: "I02/10/2000CA", inicioVigencia: '20/01/2021', finVigencia:"20/01/2028", ambito: 'PROVINCIAL', estado: 'ACTIVO'}
  ]

  constructor() { }

  getResolucion()
  {
    return this.listresolucion.slice();
  }

  eliminarResolucion(index:number)
  {
    this.listresolucion.splice(index,1)
  }

  agregarResolucion (rutas: Resolucion){
    this.listresolucion.unshift(rutas);
  }

}
