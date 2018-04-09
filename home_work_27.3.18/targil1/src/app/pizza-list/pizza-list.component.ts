import { Component, OnInit } from '@angular/core';
import{singelpizza} from "../shared/models/class_pizza"
import{pizzainfo} from "../shared/models/class_pizzainfo"
import{MakeRundomNum} from "../../assets/funck"

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})


export class PizzaListComponent  {
  pizzainfo:pizzainfo=new pizzainfo();
  pizzalist:singelpizza[]=this.pizzainfo.GetPizzas();

}
