import { Component, OnInit } from '@angular/core';
import {UrlInfoservice} from "../shared/services/PepoleList.service"


@Component({
  selector: 'app-pepole-img',
  templateUrl: './pepole-img.component.html',
  styleUrls: ['./pepole-img.component.css']
})
export class PepoleImgComponent implements OnInit {
  personInfo:{}
  constructor(private myUrlInfoService:UrlInfoservice){
    this.personInfo=this.myUrlInfoService.PersonData
   }

  ngOnInit() {
  }

}
