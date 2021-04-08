import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <h1>{{titulo}}</h1>
    <span>la base es:{{numero}}</span><br>
    <button (click)="acumular(base)">+5</button>{{numero}}
    <button  (click)="acumular(-base)">-5</button>

    `

})
export class ContadorComponent{
  
    titulo:string="Contador App";
    numero:number=0;
    base:number=5;
   acumular(valor:number):number
   {
     return this.numero +=valor;

   }

}