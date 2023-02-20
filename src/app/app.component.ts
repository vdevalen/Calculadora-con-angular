import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora'; //propiedad titulo
  numero1: number=0; //se inicializa en 0
  numero2: number=0;
  resultado: number=0;

  sumar():void{
    this.resultado= this.numero1+this.numero2
  }

  restar():void{
    this.resultado= this.numero1-this.numero2
  }

  dividir():void{
    this.resultado= this.numero1/this.numero2
  }
}
