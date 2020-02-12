
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { numberValidator } from '../validators/number.validators';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.less']
})
export class FormbuilderComponent implements OnInit {

    userForm = this.fb.group({
        fname: ['Naga', [Validators.required]],
        lname: ['Ragothaman'],
        age: ['', [Validators.required, Validators.maxLength(3), numberValidator]],
        address: this.fb.group({
            street: ['Kodambakkam'],
            city: ['Chennai'],
            pincode: ['600024']

        }),
        hobbies: this.fb.array([['', Validators.required]])
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

    }

    addHobby() {
        (this.userForm.get("hobbies") as FormArray).push(this.fb.control('', Validators.required));
    }

    removeHobby(index) {
        (this.userForm.get("hobbies") as FormArray).removeAt(index);
    }

}
