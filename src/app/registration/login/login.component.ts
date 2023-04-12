import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    forms!:FormGroup

    constructor( private http:HttpClient,private fb:FormBuilder,private router:Router){
        this.forms = this.fb.group({
    
        login_user: [''],
        login_password: ['']
    
    })
  }
  Submitdata() {
       
        console.log()
        var data:any = this.forms.value

        var dat = {
        "login_user": data.login_user,
        "login_password": data.login_password, }
        console.log(dat)
        this.http.post<any>("http://103.255.39.101:5555/api/User_register/Login", dat).subscribe(res => { 
        console.log(res)
        if(res.code == 40){
         
          console.log("dfxgch")
          this.router.navigate([''])
        }
     })
}
}
