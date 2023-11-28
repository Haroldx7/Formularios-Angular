import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { Route } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  form: FormGroup;
  constructor(){
    this.form = new FormGroup({
      nombre: new FormControl(''),
      celular: new FormControl(''),
      direccion: new FormControl(''),
      correo: new FormControl(''),
      contrasena: new FormControl('')
    });
  }

  enviar(){
    const formValues = this.form.value;

    localStorage.setItem('usuario', JSON.stringify(formValues));

    alert("Los datos se guardaron correctamente")
  }

}