import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{movie} from ".//../../assets/moduls/movie_interface"
import{moviearr} from ".//../../assets/moduls/movie_arr"


@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent{
  selected_movie:movie
  show_movie_info:boolean;

  init_selected_movie_from_child1(movie_param:movie):void{
    this.selected_movie=movie_param
    this.show_movie_info=true;
    //alert(this.selected_movie.id);
  }
  clearMovieData():void{
    this.show_movie_info=false;
  }

}
