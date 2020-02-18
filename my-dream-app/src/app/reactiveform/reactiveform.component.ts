import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

//import { nameValidator } from '../validators/name.validators';
import { numberValidator } from '../validators/number.validators';

import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';

declare var $: any;

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    styleUrls: ['./reactiveform.component.less']
})
export class ReactiveformComponent implements OnInit {

    userId: string;
    pageTitle: string;
    btnText: string;

    userForm = new FormGroup({
        user_id: new FormControl(''),
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        age: new FormControl('', [Validators.required, Validators.maxLength(3), numberValidator]),
        address: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            pincode: new FormControl('', [Validators.required, Validators.maxLength(6)])
        }),
        hobbies: new FormArray([
            new FormControl('', Validators.required)
        ]),
        totalMembers: new FormControl('1'),
        familymembers: new FormArray([
            new FormGroup({
                mem_name: new FormControl('', Validators.required),
                age: new FormControl('', Validators.required)
            })
        ])
    });

    formSubmitted: boolean;
    notifyClass: string;
    formMessage: string;

    constructor(private userservice: UserService, private route: ActivatedRoute) {
        this.formSubmitted = false;
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                this.userId = params.id;
                this.pageTitle = "Edit User";
                this.btnText = "Update";
                this.userservice.getOneUser(params.id).subscribe((resp: User) => {
                    this.userForm.patchValue(resp);

                    var hobbiesArray = (this.userForm.get("hobbies") as FormArray);
                    for (let i = 0; i < hobbiesArray.length; i++) {
                        (this.userForm.get('hobbies') as FormArray).removeAt(i);
                    }
                    for (let i = 0; i < resp.hobbies.length; i++) {
                        (this.userForm.get('hobbies') as FormArray).push(new FormControl(resp.hobbies[i], Validators.required));
                    }

                    this.userForm.get('totalMembers').setValue(resp.familymembers.length);

                    var membersArray = (this.userForm.get("familymembers") as FormArray);
                    for (let i = 0; i < membersArray.length; i++) {
                        (this.userForm.get('familymembers') as FormArray).removeAt(i);
                    }

                    for (let i = 0; i < resp.familymembers.length; i++) {
                        let member = resp.familymembers[i];
                        (this.userForm.get('familymembers') as FormArray).push(
                            new FormGroup({
                                mem_name: new FormControl(member.mem_name, Validators.required),
                                age: new FormControl(member.age, Validators.required)
                            })
                        );
                    }
                });
            }
            else {
                this.pageTitle = "Create User";
                this.btnText = "Create";
            }
        });
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

    handleFormSubmit(data: User) {
        this.userservice.createUser(data).subscribe((resp: any) => {
            this.notifyClass = (resp.status == "success") ? "alert-success" : "alert-danger";
            this.formMessage = resp.message;
        });

        if (this.btnText == "Create") {
            this.userForm.reset();
        }
    }
}
