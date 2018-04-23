import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Artical_list } from '../shared/services/sarticallist.services';
import { Articel } from '../shared/modules/artical_inter.module';
import { ArticleIndex } from '../shared/services/indexServices.services';


@Component({
  selector: 'app-article-info-component',
  templateUrl: './article-info-component.component.html',
  styleUrls: ['./article-info-component.component.css']
})
export class ArticleInfoComponentComponent{

  Articel_list:Articel[]
  @Input() articelnum:number
  @Output() HideEmitterVoid: EventEmitter<void>=new EventEmitter<void>()

  Article_index:number

  public hide_info():void{
    this.HideEmitterVoid.emit()
  }
  
  constructor(private myService:Artical_list,private myService2: ArticleIndex) { 
    this.Articel_list=myService.Articel_list;  
    this.Article_index=myService2.article_index  
      }

}
