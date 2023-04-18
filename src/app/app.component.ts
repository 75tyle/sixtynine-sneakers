import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sixtynine-sneakers';
  timer:number = 86400
  hours(){
    
  }
  minutes(){

  }
  seconds(){

  }
  constructor() {
this.tu()
  }
  tu(){
    setTimeout(()=>{
      console.log(this.timer--)
      this.tu();
     },1000)
  }
}
