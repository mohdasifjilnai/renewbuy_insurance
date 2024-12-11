import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appDateFormatter]", // Use this directive in your template
  standalone: true,
})
export class DateFormatterDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  private readonly maxLength = 10; // 10 characters for dd/mm/yyyy

  @HostListener("input", ["$event"]) onInput(event: any): void {
    const inputValue = event.target.value;

    if (inputValue.length > this.maxLength) {
      event.target.value = inputValue.slice(0, this.maxLength);
    }
  }
  @HostListener("keypress", ["$event"])
  validateNumberInput(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;

    if (
      (charCode >= 48 && charCode <= 57) || 
      charCode === 47 
    ) {
      return; 
    }

    event.preventDefault();
  }
}
