import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    Name <input type="text" [(ngModel)]="name" (input)="nameChange.emit(name)">
  `,
  styles: [
  ]
})
export class InfoComponent {
  @Input() name: any;
  @Output() nameChange = new EventEmitter();
}
