import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  check_login:boolean=true
  url:string = "http://localhost:4200"
  naam={
    'col-12':false,
    'col-6':false
  }


  login(){
    this.router.navigate(['registration'])
    this.check_login=false
    this.naam['col-12']=true
    this.naam['col-6']=false
  }
  constructor(private router:Router) {
   
    
  }

  ngOnInit(): void {
  console.log(window.location.href)
  if(window.location.href == this.url+'/registration' || window.location.href == this.url+'/registration/register'){
    this.check_login=false
    this.naam['col-12']=true
    this.naam['col-6']=false
    }else{
      this.check_login=true
      this.naam['col-12']=false
    this.naam['col-6']=true
    }
  }

  navigation_check(){
  
  }
  navigate(){
    
    this.router.navigate(['/'])

    this.check_login=true
    this.naam['col-12']=false
  this.naam['col-6']=true
  
  }

}
