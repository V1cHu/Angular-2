import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {

  constructor() { }

  	private authenticated:boolean=false;

  	authenticateUser(form):Promise<boolean>{
	  	if(form.username === 'nick' && form.password ==='fury'){
	  		this.authenticated = true;
		}else{
			this.authenticated = false;
		}	
			return Promise.resolve(this.authenticated);
	}

	logout():void{
		this.authenticated=false;
	}

	isAuthenticated():boolean{
		return this.authenticated;
	}
}
