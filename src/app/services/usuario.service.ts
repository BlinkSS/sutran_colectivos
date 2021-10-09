import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: "abcd", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "dedgg", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "yhfd", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "eddf", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "lcgg", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "cdre", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "pdlsa", apellidos: 'Luis', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "lcgg", apellidos: 'Hydrogen', nombres:"Carlos", celular: '2323123'},
    {usuario: "zgdq", apellidos: 'Hydrogen', nombres:"Hydrogen", celular: '2323123'},
    {usuario: "qwrgs", apellidos: 'Hydrogen', nombres:"Castillo", celular: '2323123'}
  ]

  constructor() { }

  getUsuario()
  {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number)
  {
    this.listUsuarios.splice(index,1)
  }

  agregarUsuario (usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
