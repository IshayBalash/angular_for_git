import {UrlLink} from "../modules/URLlinkInter.module"
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import  {PepoleData} from "../modules/datainter.moudule"


@Injectable()
export class UrlInfoservice{
   Url:UrlLink={data:[]};


   PersonData:PepoleData={id:undefined,first_name:undefined,last_name:undefined,avatar:undefined}
   image = { imglink: undefined };
   


    setPepoleChoise(person:PepoleData):void{
        this.PersonData.id=person.id;
        this.PersonData.first_name=person.first_name;
        this.PersonData.last_name=person.last_name
        this.PersonData.avatar=person.avatar
    }

   SetImge(strparam:string):void{
       this.image.imglink=strparam;
   }


   


    constructor(private myHttpClient:HttpClient)
    {   
        let urlLink:string="https://reqres.in/api/users"
        this.myHttpClient.get("https://reqres.in/api/users").subscribe((x:UrlLink)=>{
            this.Url.data=x.data
        })
        this.image.imglink="https://diit.cz/sites/default/files/google_2015_logo.png"
    }
    


}