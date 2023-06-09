import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';


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

  bag(){
    this.router.navigate(['bag'])
  }
  login(){
    this.router.navigate(['registration'])
    this.check_login=false
    this.naam['col-12']=true
    this.naam['col-6']=false
  }
  constructor(private router:Router,private active:ActivatedRoute) {
   
    
  }

  ngOnInit(): void {
this.active.queryParams.subscribe(res =>{
  if(window.location.href == this.url+'/'||window.location.href == this.url+'/bidding'||window.location.href == this.url+'/bag'){
    this.check_login=true
    this.naam['col-12']=false
    this.naam['col-6']=true
  }else{
    this.check_login=false
    this.naam['col-12']=true
    this.naam['col-6']=false
  }
})
  console.log(window.location.href)
  // if(window.location.href == this.url+'/registration' || window.location.href == this.url+'/registration/register'){
  //   this.check_login=false
  //   this.naam['col-12']=true
  //   this.naam['col-6']=false
  //   }else{
  //     this.check_login=true
  //     this.naam['col-12']=false
  //   this.naam['col-6']=true
  //   }
   }

  navigation_check(){
  
  }
  navigate(){
    
    this.router.navigate(['/'])

    this.check_login=true
    this.naam['col-12']=false
  this.naam['col-6']=true
  
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    console.log('Back button pressed');
    if(window.location.href == this.url+'/'||window.location.href == this.url+'/bidding'||window.location.href == this.url+'/bag'){
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
  function navigation_check() {
    throw new Error('Function not implemented.');
  }

