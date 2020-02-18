import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private header: HttpHeaders = new HttpHeaders({});

    constructor(private http: HttpClient) { }

    createUser(user: User) {
        //this.header.append('Content-Type', 'application/x-www-form-urlencoded');
        //this.header.append('Content-Type', 'application/json; charset=utf-8'); 
        return this.http.post('http://localhost/api/createUser.php', JSON.stringify(user), { headers: this.header });
    }

    getAllUsers() {
        return this.http.get('http://localhost/api/getAllUsers.php');
    }

    getOneUser(user_id) {
        return this.http.get('http://localhost/api/getOneUser.php?user_id=' + user_id);
    }
}
