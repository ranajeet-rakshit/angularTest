import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() charecters;
  swService: StarWarService;
  activatedRoute: ActivatedRoute;
  loadedSide:string = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarService) { 
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.charecters = this.swService.getCharecter(params.side);
      this.loadedSide = params.side;
    });

    this.subscription = this.swService.charectersChanged.subscribe(()=>{
      this.charecters = this.swService.getCharecter(this.loadedSide);
    });
    this.swService.fetchCharecters();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
