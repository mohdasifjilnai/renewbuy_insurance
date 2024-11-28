import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terms-condition-hero',
  standalone: true,
  imports: [],
  templateUrl: './terms-condition-hero.component.html',
  styleUrl: './terms-condition-hero.component.scss'
})
export class TermsConditionHeroComponent {
  @Input() pageData:any;

}
