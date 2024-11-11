import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inclusions',
  templateUrl: './inclusions.component.html',
  styleUrl: './inclusions.component.scss',
})
export class InclusionsComponent {
  @Input() pageData: any;
}
