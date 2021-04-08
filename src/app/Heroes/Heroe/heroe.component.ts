import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

})
export class HeroesComponent{

    nombre:string="Iroman";
    edad:number=46;
    get mayusculas(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{

        return `${this.nombre}--${this.edad}`;

    }
     
    cambiarnombre():void{
        this.nombre='spiderman';

    }

    cambiarEdad():void{

        this.edad=35;
    }

}