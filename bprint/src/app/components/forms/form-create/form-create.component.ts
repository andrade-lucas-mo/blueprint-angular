import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-form-create',
    templateUrl: './form-create.component.html',
    styleUrl: './form-create.component.css'
})

export class FormCreateComponent {
    emailData = {
        validatorsRules: [Validators.required]
    }
    
    submit() {
        console.log("Submit")
    }
}