import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

//import { nameValidator } from '../validators/name.validators';
import { numberValidator } from '../validators/number.validators';

declare var $: any;

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    styleUrls: ['./reactiveform.component.less']
})
export class ReactiveformComponent implements OnInit {

    userForm = new FormGroup({
        fname: new FormControl('Nagarajan', Validators.required),
        lname: new FormControl('Ragothaman', Validators.required),
        age: new FormControl(30, [Validators.required, Validators.maxLength(3), numberValidator]),
        address: new FormGroup({
            street: new FormControl('Kodambakkam', Validators.required),
            city: new FormControl('Chennai', Validators.required),
            pincode: new FormControl('600024', [Validators.required, Validators.maxLength(6)])
        }),
        hobbies: new FormArray([
            new FormControl('Reading Books', Validators.required)
        ]),
        familymembers: new FormArray([
            new FormGroup({
                mem_name: new FormControl('Tommy', Validators.required),
                age: new FormControl(4, Validators.required)
            })
        ])
    });


    constructor() { }

    ngOnInit() {

    }

    addHobby() {
        (this.userForm.get("hobbies") as FormArray).push(new FormControl('', Validators.required));
    }

    removeHobby(index) {
        (this.userForm.get("hobbies") as FormArray).removeAt(index);
    }

    createMembers(value) {
        var family = (this.userForm.get("familymembers") as FormArray);
        while (family.length) {
            family.removeAt(0);
        }

        for (let i = 1; i <= value; i++) {
            (this.userForm.get("familymembers") as FormArray).push(
                new FormGroup({
                    mem_name: new FormControl('', Validators.required),
                    age: new FormControl('', Validators.required)
                })
            );
        }
    }

    removeMember(index) {
        (this.userForm.get("familymembers") as FormArray).removeAt(index);
    }
}
