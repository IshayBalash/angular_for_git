import { Component, OnInit } from '@angular/core';
import { Articel } from '../shared/modules/artical_inter.module';
import { Artical_list } from '../shared/services/sarticallist.services';
import { ArticleIndex } from '../shared/services/indexServices.services';


@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.css']
})

export class ArticlesListComponentComponent  implements OnInit {
  Articel_list:Articel[]
  IndexNum:number;
  show_articel_info:boolean=false
  
  set_index_arr(num:number):void {
    this.IndexNum=num;
    this.show_articel_info=true;
  }
  
  hide_articel_info():void{
    this.show_articel_info=false;

  }


  constructor(private myService:Artical_list,private myService2: ArticleIndex) { 
    this.Articel_list=this.myService.Articel_list;
    
      }

      ngOnInit() {
        this.IndexNum=this.myService2.article_index;
    }
}
