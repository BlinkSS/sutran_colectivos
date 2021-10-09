import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = []

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    })
  }

cerrarSesion(): void {
  this.setCookie("usuario", '', -1);
  this.setCookie("rol", '', -1);
  this.setCookie("entidad", '', -1);
}

private setCookie(name: string, value: string, expireDays: number, path: string = '') {
  let d:Date = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  let expires:string = `expires=${d.toUTCString()}`;
  let cpath:string = path ? `; path=${path}` : '';
  document.cookie = `${name}=${value}; ${expires}${cpath}`;
}

}
