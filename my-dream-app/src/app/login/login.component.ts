import { Component, OnInit } from '@angular/core';

import { UserService } from '.././user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
	constructor(private userservice: UserService) { 

	}

  	ngOnInit() {

  	}

  	loginMethod(data){
  		var validUser = this.userservice.checkValidUser(data);
  		if(validUser){
  			localStorage.setItem('userLoggedIn', '1');
  		}
  	}
}
