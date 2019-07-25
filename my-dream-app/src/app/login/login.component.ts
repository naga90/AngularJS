import { Component, OnInit } from '@angular/core';

import { UserService } from '.././user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data;
	constructor(private userservice: UserService) { 

	}

  	ngOnInit() {

  	}

    registerUser(data){
      var email = data.email;
      var pass = data.psw;
      this.userservice.registerUser(email,pass).subscribe( (data) => this.data = { });
    }

  	loginMethod(data){
  		var validUser = this.userservice.checkValidUser(data);
  		if(validUser){
  			localStorage.setItem('userLoggedIn', '1');
  		}
  	}
}
