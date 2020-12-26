import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() charecters;
  swService: StarWarService;
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarService) { 
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.charecters = this.swService.getCharecter(params.side);
    });
  }

}
