import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component(
    {
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
export class RegisterComponent {
    forms!:FormGroup

    constructor(private http: HttpClient,private fb:FormBuilder, private router:Router) {
this.forms = this.fb.group({
    user_email_address:[''],
     user_mobile_number:[''],
     user_password:['']
})
     }
    Submitdata() {
       
        console.log()
        var data:any = this.forms.value
    
        var dat = {
             "user_email_address": data.user_email_address,
         "user_mobile_number": parseInt(data.user_mobile_number),
          "user_password": data.user_password, }
        console.log(dat)
        this.http.post<any>("http://103.255.39.101:5555/api/User_register", dat).subscribe(res => { 
            console.log(res)
            if(res.code == 50){
                this.router.navigate([''])
            }
         })
         
    }
}