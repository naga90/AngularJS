import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    styleUrls: ['./reactiveform.component.less']
})
export class ReactiveformComponent implements OnInit {

    userForm = this.fb.group({
        fname: ['Nagarajan', Validators.required],
        lname: ['Ragothaman'],
        age: [29],
        address: this.fb.group({
            street: ['Kodambakkam'],
            city: ['Chennai'],
            pincode: ['600024']

        })
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

    }

}
