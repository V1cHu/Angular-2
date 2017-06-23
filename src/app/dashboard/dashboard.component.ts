import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';

import {Avenger} from '../avenger';
import {AvengerService} from '../avenger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthenticationService,private avengerService:AvengerService,private router:Router) { }

  ngOnInit() {
  	if(!this.authService.isAuthenticated()){
  		this.router.navigate(['login']);
  	}
  	this.avengers =  this.avengerService.getAvengersList();
  }

  avengers: Avenger[];
  message:string;


  onEdit(index:number):void{
  	this.router.navigate(['view',index])
  }

  onDelete(index:number){
  	this.avengerService.deleteAvenger(index).then(isSuccess=>{
  		if(isSuccess){
  			this.message='Avenger deleted successfully!';
  		}else{
  			this.message ='Avenger could not be deleted. Please try again.'
  		}
  	}).catch(()=>{
  		this.message ='Avenger could not be deleted. Please try again later.'
  	})
  }

  onAddAvenger(){
  	this.router.navigate(['add']);
  }

  onLogout(){
  	this.authService.logout();
  	this.router.navigate(['login']);
  }

}
