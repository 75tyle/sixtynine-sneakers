import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { product } from 'src/app/Product';
@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {


  items:any={}
  title = 'sixtynine-sneakers';
  timer:number = 86400
  hr:number =23
  min:number =60
  sec:number=60
product: any;
  id!: number;


  constructor(private route:ActivatedRoute) {
this.tu()
  }
  tu(){
    setTimeout(()=>{
     var sec = this.sec--
     console.log(sec)
     if(sec==0){
      this.sec=60
      this.min--
      console.log(this.min)
     }
     if(this.min==0){
      this.min=60
      this.hr--
      console.log(this.hr)
     }
      this.tu();
     },1000)
  }
  hours(){
  }
  minutes(){

  }
  seconds(){
  
  }
  ngOnInit():void{
    debugger
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    for(let i = 0;i<product.length;i++){
      console.log(product[i].id)
      if(product[i].id == this.id){
        console.log(product[i])
      this.items=product[i]
      console.log(this.items)
      }
      
      }
  }
  
}
