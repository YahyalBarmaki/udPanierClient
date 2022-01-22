import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardService } from "../shared/services/card.service";


@NgModule({
    imports: [CommonModule],
    providers: []

})
export class OrdersModule {
    constructor(private cartSerive : CardService){
            cartSerive.initLocalStorage()
    }
}