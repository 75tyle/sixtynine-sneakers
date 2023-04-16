import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakerCardsComponent } from './main/sneaker-cards/sneaker-cards.component';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () => import('../app/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'bidding',
    loadChildren: () => import('../app/bidding/bidding.module').then(m => m.BiddingModule)
  },
  {
    
    path:'', component:SneakerCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
