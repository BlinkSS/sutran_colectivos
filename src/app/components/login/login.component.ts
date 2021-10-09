import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
loading = false;
private isConsented: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router : Router) { 
this.form = this.fb.group({
usuario: ['',Validators.required],
password: ['',Validators.required]
})

  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario =="lc" && password == "123")
    {
      this.fakeloading();
      this.setCookie("usuario",usuario,2)
      this.setCookie("rol","Administrador",2)
      this.setCookie("entidad","3 ",2)
    }
    else
    {
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o Password ingresados son inválidos','',{
      duration : 5000,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })
  }  

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 1500);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
}

  /* private consent(isConsent: boolean, e: any) {
    if (!isConsent) {
        return this.isConsented;
    } else if (isConsent) {
        this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
        this.isConsented = true;
        e.preventDefault();
    }
  } */



}
