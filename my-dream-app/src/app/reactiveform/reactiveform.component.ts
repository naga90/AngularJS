import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    styleUrls: ['./reactiveform.component.less']
})
export class ReactiveformComponent implements OnInit {

    userForm = this.fb.group({
        fname: [],
        lname: [],
        age: [],
        address: this.fb.group({
            street: [],
            city: [],
            pincode: []

        })
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

}
