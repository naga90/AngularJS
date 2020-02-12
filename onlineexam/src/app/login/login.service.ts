import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    handleLogin(form) {
        let data = { "email": form.value.email, "password": form.value.password };
        const loginUrl = environment.loginUrl;
        return this.http.get(loginUrl);
    }
}
