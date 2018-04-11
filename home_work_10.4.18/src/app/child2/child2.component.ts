import { Component, OnInit, Input } from '@angular/core';
import{movie} from ".//../../assets/moduls/movie_interface"
import{moviearr} from ".//../../assets/moduls/movie_arr"


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component{
  @Input()movie_info:movie;

  
}
