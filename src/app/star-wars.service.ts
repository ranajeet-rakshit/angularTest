import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class StarWarService{

    private charecters = [
        {name:"Luke Skywalker", side: ""},
        {name:"Darth Vader", side: ""}
    ];

    private logger: LoggerService;

    constructor(logger: LoggerService){
        this.logger = logger;
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