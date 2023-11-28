import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  recuperarForm: FormGroup;

  constructor(){
    this.recuperarForm = new FormGroup({
      nombre: new FormControl(''),
      correo: new FormControl(''),
      contrasenaNueva: new FormControl('')
    });
  }


  recuperarContrasena(){
    const nombre = this.recuperarForm.get('nombre')!.value
    const correo = this.recuperarForm.get('correo')!.value
    const contrasenaNuenvaValor = this.recuperarForm.get('contrasenaNueva')!.value

    const usuarioDatos = localStorage.getItem('usuario') 
    if(usuarioDatos){
      const datos = JSON.parse(usuarioDatos)
      if(nombre == datos.nombre && correo==datos.correo){
        datos.contrasena = contrasenaNuenvaValor
        localStorage.setItem('usuario', JSON.stringify(datos));
      }
    }
  }
}
