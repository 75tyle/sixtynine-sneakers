import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check_login:boolean=true
  naam={
    'col-12':false,
    'col-6':false
  }
  constructor(private router:Router) {
   
    
  }
  ngOnInit(): void {
  console.log(window.location.href)
//   this.router.events.subscribe(res =>{
// var data:any = res
// console.log(data.url)
// debugger
// if (data.url='/'){
//  console.log('you are in login page')
//  this.check_login=false
//  this.naam['col-12']=true
// }else{
// this.check_login=true
// this.naam['col-12']=false
// this.naam['col-6']=true
// console.log('notin')

// }

//    })

if(window.location.href == "http://localhost:59293/mainpage"){
  this.check_login=true
  this.naam['col-12']=false
this.naam['col-6']=true
}else{
  this.check_login=false
  this.naam['col-12']=true
this.naam['col-6']=false
}

  }
}
