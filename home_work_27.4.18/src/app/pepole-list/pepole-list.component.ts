import { Component, OnInit } from '@angular/core';
import {UrlInfoservice} from "../shared/services/PepoleList.service"
import {UrlLink} from "..//shared/modules/URLlinkInter.module"
import {PepoleData} from "../shared/modules/datainter.moudule"

@Component({
  selector: 'app-pepole-list',
  templateUrl: './pepole-list.component.html',
  styleUrls: ['./pepole-list.component.css']
})
export class PepoleListComponent implements OnInit {

   InfoFromUrl: UrlLink;

   setPepoleChoiseInService(pepole:PepoleData){
     this.myUrlInfoService.setPepoleChoise(pepole)
   }
   
   setImageInService(link:string){
    this.myUrlInfoService.SetImge(link)
  }

  constructor(private myUrlInfoService:UrlInfoservice) {
    this.InfoFromUrl=this.myUrlInfoService.Url
   }

  ngOnInit() {
  }

}
