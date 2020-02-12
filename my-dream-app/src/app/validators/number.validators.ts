import { AbstractControl } from '@angular/forms';

export function numberValidator(control: AbstractControl) {
    if (isNaN(control.value)) {
        return { isNumber: true };
    }
    else if (control.value > 100) {
        return { isNumber: true };
    }
    return null;
}

