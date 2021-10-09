import { Injectable } from '@angular/core';
import { Vehiculos } from '../interfaces/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  listVehiculos: Vehiculos[] = [
    {placa: "ADP123", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'},
    {placa: "TEC245", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'},
    {placa: "BGF253", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'},
    {placa: "LSD223", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'},
    {placa: "PIR532", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'INACTIVO'},
    {placa: "WXF232", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'INACTIVO'},
    {placa: "QAE323", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'},
    {placa: "PWD034", fechaVigencia: '20/10/2022', finVigencia:"20/01/2024", estadoVehiculo: 'ACTIVO'}
  ]


  constructor() { }

  getVehiculos()
  {
    return this.listVehiculos.slice();
  }

  eliminarVehiculos(index:number)
  {
    this.listVehiculos.splice(index,1)
  }

  agregarVehiculos (vehiculos: Vehiculos){
    this.listVehiculos.unshift(vehiculos);
  }


}
