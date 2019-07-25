import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

	configUrl = environment.baseUrl;

	constructor(private http: HttpClient) { 

	}

	registerUser(email,pass) {
	  return this.http.post(this.configUrl+'register',{email:email,password:pass});
	}

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
