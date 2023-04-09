import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakerCardsComponent } from './main/sneaker-cards/sneaker-cards.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:'mainpage', component:SneakerCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
