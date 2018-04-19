import { Component, OnInit } from '@angular/core';
import{veg_arr} from "..//..//assets/veg_arr";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  
  user_input:string="enter a letter"
  show_div_2:boolean=false;
  arr_veg:Array<string> = veg_arr;
  veg_list:Array<string>=new Array<string>();


  add_veg:boolean=false
  user_veg:string="enter the veg name";
  show_add_veg_div():void{
    this.add_veg=true;
    this.show_div_2=false;
    this.user_input="enter a letter";
    this.clear_data();
  }

  add_user_veg():void{
    if(this.user_veg=="enter the veg name"){
      alert("enter the veg name");
      return;
    }
    if(this.user_veg.length==0){
      alert("must enter veg");
      return;
    }
    else{
      this.arr_veg.push(this.user_veg);
    }
    this.add_veg=false;
  }
  
  submit():void{
    if(this.user_input=="please enter a leter"){
      alert("user didnt enter a letter");
      this.user_input="enter a letter"
      return;
    }
     else if(this.user_input.length==0){
       alert("no data in search");
       this.user_input="enter a letter"
       return;
     }
     else if(this.user_input.length>=2){
       alert("please enter only one letter")
       this.user_input="enter a letter";
       return;
     }
     else{
       for (let i of this.arr_veg){
         if(i[0]==this.user_input){
           this.veg_list.push(i);
           this.show_div_2=true;
         }
       }
       if(this.veg_list.length==0){
         alert("there is no veg in this letter, go ahed and add own to the list");
         this.user_input="enter a letter";
       }
     }
  }

     clear_data():void{
       this.show_div_2=false;
       this.user_input="enter a letter"
       this.veg_list.length=0;
   }


   hide_user_veg():void{
     this.add_veg=false;
   }

}
