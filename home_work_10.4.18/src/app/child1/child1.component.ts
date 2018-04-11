import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{movie} from ".//../../assets/moduls/movie_interface"
import{moviearr} from ".//../../assets/moduls/movie_arr"

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  movie_list:movie[]=moviearr;
  @Output()transfermovie:EventEmitter<movie>=new EventEmitter<movie>();
  
  selected_movie:movie;
  
  initSelectedBook(bookid:number):void{
    for(let i of this.movie_list){
      if (i.id==bookid){
        this.selected_movie=i
      }
    }
    this.transfermovie.emit(this.selected_movie)
  }
  clearMovieData():void{
    this.selected_movie=null;
  }
  
}
