import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
 
  heroes:string[]=['Spiderman','Iroman','Hulk','Thor','Capitan América']
  heroeborrado:string='';

  borrarElemento():void{

    // console.log("borrando...");    
    
    this.heroeborrado=this.heroes.shift()||'';

  }
}
