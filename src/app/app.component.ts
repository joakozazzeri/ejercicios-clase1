import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent, LoginComponent, ErrorComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios-clase1';
  edadUno: number=0;
  edadDos: number=0;
  suma: number=0;
  promedio: number=0;

  sumar(){
    return this.edadUno+this.edadDos;
  }

  promediar(){
    return (this.edadUno+this.edadDos)/2;
  }

  calcular(){
    this.suma = this.sumar();
    this.promedio = this.promediar();
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }

}
