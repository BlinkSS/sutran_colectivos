import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder, private _usuarioService: UsuarioService,
    private router: Router, private _snackBar: MatSnackBar
    ) {
    this.form = this.fb.group({
      usuario:['',Validators.required],
      apellidos:['',Validators.required],
      nombres:['',Validators.required],
      celular:['',Validators.required],
    });
   }

  ngOnInit(): void {
  }
  agregarUsuario(){
    const user: Usuario = {
      usuario: this.form.value.usuario,
      apellidos: this.form.value.apellidos,
      nombres: this.form.value.nombres,
      celular: this.form.value.celular
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);
    this._snackBar.open('El usuario fue agregado con éxito!!','',{
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition:'bottom'
    })
  }

}
