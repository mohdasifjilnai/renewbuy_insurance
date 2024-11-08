import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone: true
})
export class CapitalizeDirective {


  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const input = this.el.nativeElement.value;

    // Convert to uppercase
    const upperCaseValue = input.toUpperCase();

    // Update the input value
    this.el.nativeElement.value = upperCaseValue;
  }

}
