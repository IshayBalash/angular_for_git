import { Component, OnInit } from '@angular/core';
import{movie} from ".//../../assets/moduls/movie_interface"
import{moviearr} from ".//../../assets/moduls/movie_arr"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movie_list:movie[]=moviearr;
  selected_movie:movie;
 
 

  initSelectedBook(bookid:number):void{
    for(let i of this.movie_list){
      if (i.id==bookid){
        this.selected_movie=i;
      }
    }
  }
  clearMovieData():void{
    this.selected_movie=null;
  }
  

}
