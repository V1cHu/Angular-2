import { Component, OnInit ,Input} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService :AuthenticationService,private router: Router) { }

  ngOnInit() {

  }

  error:string;
  
  onSubmit(form:any):void{
  	this.authService.authenticateUser(form).then(isAuthenticated => {
  	if(isAuthenticated){
  		this.router.navigate(['/dashboard']);
  	}else{
  		this.error ='Invalid username/password. Please try again.';
  	}}).catch(()=>this.error='Could not authenticate. Please try again later.');
  }

}
