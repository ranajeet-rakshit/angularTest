import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoggerService } from "./logger.service";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarWarService{

    private charecters = [
        {name:"Luke Skywalker", side: ""},
        {name:"Darth Vader", side: ""}
    ];

    private logger: LoggerService;
    private http: HttpClient;
    charectersChanged = new Subject<void>();

    constructor(logger: LoggerService, http:HttpClient){
        this.logger = logger;
        this.http = http;
    }

    fetchCharecters(){
        this.http.get('https://swapi.dev/api/people/').subscribe(
            (response: any)=>{
                this.charecters = response.results.map((chars)=>{
                    return {name: chars.name, side:''};
                });
                this.logger.log(this.charecters);
                this.charectersChanged.next();
            }
        );
    }
    

    getCharecter(chosenSide){
        if(chosenSide=="all"){
            return this.charecters.slice();
        }else{
            return this.charecters.filter((char)=>{
                return char.side == chosenSide;
            });
        }
    }

    sideAssigned(obj){
        this.charecters.forEach((char)=>{
          if(char.name == obj.name){
            char.side = obj.side;
          }
        });
        this.charectersChanged.next();
        this.logger.log("Changed side of "+obj.name+", to new side: "+obj.side);
    }

    addCharecter(name:string, side:string){
        let charExists:boolean = false;
        this.charecters.filter((char)=>{
            if(char.name == name){
                charExists = true;
            }
        });
        
        if(!charExists)
            this.charecters.push({name:name, side:side});
    }
}