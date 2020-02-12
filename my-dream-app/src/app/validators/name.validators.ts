import { AbstractControl } from '@angular/forms';

export function nameValidator(control: AbstractControl) {
    var regex = /[a-zA-Z ]+/;
    console.log(control.value.match(regex));
    if (!regex.test(control.value)) {
        return { isString: true };
    }
    return null;
}

