import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-create-charecter',
  templateUrl: './create-charecter.component.html',
  styleUrls: ['./create-charecter.component.css']
})
export class CreateCharecterComponent implements OnInit {

  availableSides = [
    {display:"None", value:""},
    {display:"Dark", value:"dark"},
    {display:"Light", value:"light"}
  ];

  private logger: LoggerService;
  private swService: StarWarService;

  constructor(logger: LoggerService, swService: StarWarService) { 
    this.logger = logger;
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm){
    this.logger.log(submittedForm);
    if(submittedForm.valid){
      this.swService.addCharecter(submittedForm.value.name, submittedForm.value.side);
    }
  }

}
