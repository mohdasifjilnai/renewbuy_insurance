import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-failure',
  standalone: true,
  imports: [],
  templateUrl: './success-failure.component.html',
  styleUrl: './success-failure.component.scss',
})
export class SuccessFailureComponent implements OnInit {
  iconLogo: any;
  statusText: any;
  message: any;
  @Input() status: any = '';
  @Input() show: boolean = false;

  ngOnInit(): void {
    if (this.status == 'success') {
      this.iconLogo = '../../../rb_assets/assets/icons/Clip path group.svg';
      this.message = 'Successfully';
      this.statusText = 'File Uploaded Successfully';
    } else {
      this.iconLogo = '../../../rb_assets/assets/icons/Ellipse 3978.svg';
      this.message = 'Unknown Error';
      this.statusText = 'Oops, something went wrong. Please try again later';
    }
  }
  reset() {
    this.show = false;
  }
}
