import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAcceptOnlyDigit]',
  standalone: true,
})
export class AcceptOnlyDigitDirective {
  constructor() {}

  @HostListener('keypress', ['$event'])
  validateNumberInput(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow digits only
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
