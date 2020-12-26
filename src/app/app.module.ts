import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { CartComponent } from './cart/cart.component';
import { TabComponent } from './tab/tab.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarService } from './star-wars.service';
import { LoggerService } from './logger.service';
import { CreateCharecterComponent } from './create-charecter/create-charecter.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:'charecters', component: TabComponent, children:[
    {path:'', redirectTo: 'all', pathMatch:'full'},
    {path:':side', component: ListComponent}
  ]},
  {path:'new-charecter', component: CreateCharecterComponent},
  {path:'**', redirectTo:'/charecters'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CartComponent,
    TabComponent,
    ListComponent,
    ItemComponent,
    CreateCharecterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
