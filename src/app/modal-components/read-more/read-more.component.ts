import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss'
})
export class ReadMoreComponent {
  @Input() leaderImage: number | any;
  @Input() leaderName: number | any;
  @Input() leaderPosition: number | any;
  @Input() leaderDescription: number | any;
  @Input() leaderDescription2: number | any;
  @Output() closeEvent = new EventEmitter<boolean>();


  close(flag: boolean): void {
    this.closeEvent.emit(flag); 
  }
}
