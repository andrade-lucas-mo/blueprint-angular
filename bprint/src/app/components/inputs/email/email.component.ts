import { Component, Input } from '@angular/core';
import {
    FormControl,
	ValidatorFn,
    Validators,
} from '@angular/forms';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrl: './email.component.css'
})
export class EmailComponent {
	@Input() data: {
		validatorsRules?: Array<ValidatorFn>,
		title?: string
	} = {}

	emailFormControl = new FormControl('');

	ngOnInit() {
		this.emailFormControl.setValidators(
			Validators.compose([...(this.data.validatorsRules || []), Validators.email])
		);
	}

	get title() {
		return this.data.title || 'Email';
	}
}
