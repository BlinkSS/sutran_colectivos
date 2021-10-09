import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empresas } from 'src/app/interfaces/empresas';
import { GobiernoSubnacional } from 'src/app/interfaces/gobiernoSubnacional';
import { Resolucion } from 'src/app/interfaces/resolucion';
import { Rutas } from 'src/app/interfaces/rutas';
import { Vehiculos } from 'src/app/interfaces/vehiculos';
import { EmpresasService } from 'src/app/services/empresas.service';
import { GobiernoSubnacionalService } from 'src/app/services/gobierno-subnacional.service';
import { ResolucionService } from 'src/app/services/resolucion.service';
import { RutasService } from 'src/app/services/rutas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  step = 0;
  mostrarRutas: Boolean = false;
  mostrarEmpresas: Boolean = false;
  mostrarAdministrador: Boolean = true;
  mostrarVehiculo: Boolean = false;
  mostrarResolucion: Boolean = false;
  variableEntidad: String = '';
  variableRol: String = '';

  setStep(index: number) {
   
    this.step = index;

    if(index == 0)
    {
      this.mostrarRutas = true;  
      //this.mostrarEmpresas = false;     
    }
    else
    {
      this.mostrarEmpresas = true;  
      //this.mostrarRutas = false;     
    } 
  }

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

  nextStep() {
       
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  
  listGobiernoSubnacional : GobiernoSubnacional[] = [];
  listRutas : Rutas[] = [];
  listEmpresas : Empresas[] = [];
  listVehiculos : Vehiculos[] = [];
  listResolucion : Resolucion[] = [];
  
  displayedColumns: string[] = ['departamento', 'provincia', 'distrito', 'tipoGobierno', 'acciones'];
  dataSource! : MatTableDataSource<any>;


  displayedColumnsRutas: string[] = ['codigoRuta', 'origen', 'itinerario', 'destino', 'acciones'];
  dataSourceRutas! : MatTableDataSource<any>;


  displayedColumnsEmpresas: string[] = ['ruc', 'descripcion','estado', 'acciones'];
  dataSourceEmpresas! : MatTableDataSource<any>;


  displayedColumnsVehiculos: string[] = ['placa', 'fechaVigencia','finVigencia', 'estadoVehiculo','acciones'];
  dataSourceVehiculos! : MatTableDataSource<any>;  

  displayedColumnsResolucion: string[] = ['fechaEmision', 'inicioVigencia','finVigencia', 'ambito', 'estado','acciones'];
  dataSourceResolucion! : MatTableDataSource<any>;  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _gobiernoSubnacionalService: GobiernoSubnacionalService,private _rutas: RutasService,
  private _empresas: EmpresasService, private _vehiculos: VehiculosService, 
  private _resolcionService : ResolucionService, private _snackBar: MatSnackBar) { }

    
  cargarGobiernoSubnacional()
  {
    this.listGobiernoSubnacional = this._gobiernoSubnacionalService.getGobiernoSubnacional();
    this.dataSource = new MatTableDataSource(this.listGobiernoSubnacional);
  }

  cargarRutas()
  {
    this.listRutas = this._rutas.getRutas();
    this.dataSourceRutas = new MatTableDataSource(this.listRutas);
  }

  cargarEmpresas()
  {
    this.listEmpresas = this._empresas.getEmpresas();
    this.dataSourceEmpresas = new MatTableDataSource(this.listEmpresas);
  }  

  cargarVehiculos()
  {
    this.listVehiculos = this._vehiculos.getVehiculos();
    this.dataSourceVehiculos = new MatTableDataSource(this.listVehiculos);
  }    

  cargarResolucion()
  {
    this.listResolucion = this._resolcionService.getResolucion();
    this.dataSourceResolucion = new MatTableDataSource(this.listResolucion);
  }  


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSourceRutas.paginator = this.paginator;
    this.dataSourceRutas.sort = this.sort;
    this.dataSourceEmpresas.paginator = this.paginator;
    this.dataSourceEmpresas.sort = this.sort;
    this.dataSourceVehiculos.paginator = this.paginator;
    this.dataSourceVehiculos.sort = this.sort;
    this.dataSourceResolucion.paginator = this.paginator;
    this.dataSourceResolucion.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterRutas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceRutas.filter = filterValue.trim().toLowerCase();
  }

  applyFilterEmpresas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceEmpresas.filter = filterValue.trim().toLowerCase();
  }

  applyFilterVehiculos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVehiculos.filter = filterValue.trim().toLowerCase();
  }

  applyFilterResolucion(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceResolucion.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.cargarGobiernoSubnacional();
    this.cargarRutas();
    this.cargarEmpresas();
    this.cargarVehiculos();
    this.cargarResolucion();
    this.variableEntidad = this.getCookie("entidad");
    this.variableRol = this.getCookie("rol");
    if(this.variableRol =="Administrador")
    {
      this.mostrarAdministrador = true;
      this.mostrarEmpresas = false;  
      this.mostrarRutas = false;
      this.mostrarVehiculo = false;   
      this.mostrarResolucion = false; 
    }
    else
    {
      this.mostrarAdministrador = false;
      this.mostrarEmpresas = true;  
      this.mostrarRutas = true;    
      this.mostrarVehiculo = true;
      this.mostrarResolucion = true; 
      this.setStep(0);
    }
  }

  verVehiculo() {
    this.mostrarVehiculo = true;
    this.nextStep();
  }


  eliminarGobiernoSubnacional(index : number)
  {
    this._gobiernoSubnacionalService.eliminarGobiernoSubnacional(index);
    this.cargarGobiernoSubnacional();
    this._snackBar.open('El Gobierno Subnacional fue eliminado con éxito!!','',{
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })

  }

  eliminarRutas(index : number)
  {
    this._rutas.eliminarRutas(index);
    this.cargarRutas();
    this._snackBar.open('La Ruta fue eliminada con éxito!!','',{
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })
  }

  eliminarEmpresas(index : number)
  {
    this._empresas.eliminarEmpresas(index);
    this.cargarEmpresas();
    this._snackBar.open('La empresa fue eliminada con éxito!!','',{
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })
  }

  eliminarVehiculos(index : number)
  {
    this._vehiculos.eliminarVehiculos(index);
    this.cargarVehiculos();
    this._snackBar.open('El vehículos fue eliminado con éxito!!','',{
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })
  }

      departamento: any[] = [
        {value: '0', viewValue: 'Lima'},
        {value: '1', viewValue: 'La Libertad'},
        {value: '2', viewValue: 'Ica'}
      ];
    
      provincia: any[] = [
        {value: '0', viewValue: 'Lima'},
        {value: '1', viewValue: 'Trujillo'},
        {value: '2', viewValue: 'Ica'}
      ];

      distrito: any[] = [
        {value: '0', viewValue: 'San Miguel'},
        {value: '1', viewValue: 'Trujillo'},
        {value: '2', viewValue: 'Pisco'}
      ];

      tipoGobierno: any[] = [
        {value: '0', viewValue: 'Región'},
        {value: '1', viewValue: 'Provincia'},
        {value: '2', viewValue: 'Distrito'}
      ];

      estadoRutaAutorizada: any[] = [
        {value: '0', viewValue: 'Habilitado'},
        {value: '1', viewValue: 'Vencido'},
        {value: '2', viewValue: 'Suspendido'},
        {value: '3', viewValue: 'Cancelado'}
      ];

}
