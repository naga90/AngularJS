import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    isValid: boolean = false;
    login;
    data;
    constructor(login: LoginService) {
        this.login = login;
    }

    ngOnInit() {

    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.login.handleLogin(form).subscribe((data) => this.data);
            console.log(this.data);
        }
        else {
            alert('Invalid Login Details');
        }
    }

}
