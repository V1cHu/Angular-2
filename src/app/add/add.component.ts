import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import {Avenger} from '../avenger';
import {AvengerService} from '../avenger.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private authService:AuthenticationService, private avengerService :AvengerService,private router:Router, private location: Location) {}

  ngOnInit() {
  	if(!this.authService.isAuthenticated()){
  		this.router.navigate(['login']);
  	}
  	this.avenger = new Avenger();
  }

  avenger:Avenger;
  error:string;

  onAdd(avenger:Avenger):void{
  	this.avengerService.addAvenger(avenger).then(isSuccess=>{
  	if(isSuccess){
  		this.router.navigate(['dashboard'])
  	}else{
  		this.error='Avenger cannot be added. Please try again.'
  	}}).catch(()=>this.error='Avenger cannot be added. Please try again later.');
  }

  onCancel():void{
  	this.location.back();
  }

}
