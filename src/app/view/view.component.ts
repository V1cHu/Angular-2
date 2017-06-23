import { Component, OnInit,Input } from '@angular/core';
import {Location } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import {Avenger} from '../avenger';
import {AuthenticationService} from '../authentication.service';
import {AvengerService} from '../avenger.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private authService:AuthenticationService,private avengerService:AvengerService,private router:Router,private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
  	if(!this.authService.isAuthenticated()){
  		this.router.navigate(['login']);
  	}
  	this.index =this.route.snapshot.params['id'];
  	var avenger =  this.avengerService.getAvenger(this.index);
  	if(avenger){
  		this.avenger = avenger;
  	}else{
  		this.router.navigate(['dashboard']);
  	}
  }

  private index:number;
  private error:string;

  @Input() avenger:Avenger;

  onCancel():void{
  	this.location.back();
  }

  onSave(avenger:Avenger):void{
  	this.avengerService.updateAvenger(avenger,this.index).then(isSuccess=>{
  		if(isSuccess){
  			this.router.navigate(['dashboard']);
  		}else{
  			this.error ='Some error has occurred. Please try again.'
  		}
  	}).catch(()=>{
  		this.error='Some error has occurred. Please try again after sometime.';
  	});
  }

}
