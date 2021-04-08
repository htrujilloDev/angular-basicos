import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./Heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        HeroesComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
        
    ]
 


})
export class HeroesModule{


}