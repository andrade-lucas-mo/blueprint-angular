import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css'
})
export class FooterComponent {
  	constructor(library: FaIconLibrary) {
		library.addIcons(faGithub);
		library.addIcons(faLinkedin);
  	}
	openLink(url: string) {
		window.open(url, '_blank');
	}
}
