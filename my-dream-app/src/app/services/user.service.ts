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
    console.log("service");
    console.log(JSON.stringify(user));
    //this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    //this.header.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post('http://localhost/api/createUser.php', JSON.stringify(user), { headers: this.header });
  }
}
