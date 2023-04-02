import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneakerCardsComponent } from './sneaker-cards/sneaker-cards.component';



@NgModule({
  declarations: [
    SneakerCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SneakerCardsComponent]
})
export class MainModule { }
