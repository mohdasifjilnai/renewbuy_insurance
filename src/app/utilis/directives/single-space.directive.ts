import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSingleSpace]',
  standalone: true,
})
export class SingleSpaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    let value = inputElement.value;
    // Remove any leading spaces
    value = value.replace(/^\s+/, '');
    value = value.replace(/[^A-Za-z\s]/g, '');

    value = value.replace(/\s{2,}/g, ' ');

    // Update the input field with the corrected value
    inputElement.value = value;
  }
}
