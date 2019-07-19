import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

	constructor() { }

	checkValidUser(formData){
		if(formData.uname == "naga" && formData.psw == "naga@123"){
			return true;
		}
		else if(formData.uname == "rajan" && formData.psw == "rajan@123"){
			return true;
		}

		return false;
	}	
}
