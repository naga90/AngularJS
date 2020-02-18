import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';



@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

    users: User[];
    constructor(private userservice: UserService) {

    }

    ngOnInit() {
        this.userservice.getAllUsers().subscribe((resp: any) => {
            this.users = resp;
        }, error => console.log('error', error));
    }
}
