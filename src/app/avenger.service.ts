import { Injectable } from '@angular/core';
import {avengers_list} from './avengers-list';
import {Avenger} from './avenger';

@Injectable()
export class AvengerService {

  constructor() { }

  private avengers :Avenger[] = avengers_list;

  getAvengersList():Avenger[]{
  	return this.avengers;
  }

  getAvenger(index:number):Avenger{
  	return index< this.avengers.length ? this.avengers[index]: null;

  }

  updateAvenger(avenger:Avenger,index:number):Promise<boolean>{
  	this.avengers[index] = avenger;
  	return Promise.resolve(true);
  }

  deleteAvenger(index:number):Promise<boolean>{
  	this.avengers.splice(index,1);
  	return Promise.resolve(true);
  }

  addAvenger(avenger:Avenger):Promise<boolean>{
  	avenger.id = this.avengers.length;
  	this.avengers.push(avenger);
  	return Promise.resolve(true);
  }

}
