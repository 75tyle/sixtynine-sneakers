import { Component } from '@angular/core';


@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent {



  title = 'sixtynine-sneakers';
  timer:number = 86400
  hr:number =23
  min:number =1
  sec:number=60


  constructor() {
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
}
