import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiddingRoutingModule } from './bidding-routing.module';
import { BiddingComponent } from './bidding/bidding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BiddingComponent
  ],
  imports: [
    CommonModule,
    BiddingRoutingModule,
    FormsModule
  ]
})
export class BiddingModule { }
