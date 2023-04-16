import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiddingRoutingModule } from './bidding-routing.module';
import { BiddingComponent } from './bidding/bidding.component';


@NgModule({
  declarations: [
    BiddingComponent
  ],
  imports: [
    CommonModule,
    BiddingRoutingModule
  ]
})
export class BiddingModule { }
