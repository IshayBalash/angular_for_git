import{singelpizza} from "./class_pizza"
import{MakeRundomNum} from "../../../assets/funck"

 export class pizzainfo{
    GetPizzas():singelpizza[]{
        let PizzaARR:Array<singelpizza>=new Array<singelpizza>();
        for(let i:number=0;i<100;i++){
            PizzaARR[i]=new singelpizza();
            PizzaARR[i].diameter=MakeRundomNum(10,50);
            PizzaARR[i].slices=MakeRundomNum(3,8);
            PizzaARR[i].toppings=MakeRundomNum(0,4)
            PizzaARR[i].price=PizzaARR[i].diameter+(PizzaARR[i].toppings*5);
        }
        return PizzaARR
    }
    

}