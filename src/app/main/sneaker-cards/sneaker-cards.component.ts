import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Product';

@Component({
  selector: 'app-sneaker-cards',
  templateUrl: './sneaker-cards.component.html',
  styleUrls: ['./sneaker-cards.component.css']
})
export class SneakerCardsComponent implements OnInit {
  
  product:any[]=[]
  snkr(id:any){
    console.log(id)
    for(let i = 0;i<product.length;i++){
    console.log(product[i].id)
    if(product[i].id == id){
      console.log(product[i])
      this.router.navigate(['bidding'])
    }
    
    }
    // this.router.navigate(['bidding'])
  }

  constructor(private router:Router) {
   
    
  }
  
  ngOnInit(): void {
   console.log(product)
   this.product = product

  }

}
