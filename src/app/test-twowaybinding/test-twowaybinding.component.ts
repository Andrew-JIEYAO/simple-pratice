import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from "./info/info.component";

@Component({
    selector: 'app-test-twowaybinding',
    standalone: true,
    template: `
    <!-- <app-info [name]="name" (nameChange)="name = $event"></app-info>
    Result: {{ name }} -->
    <app-info [(name)] = "name"></app-info>
    Result: {{ name }}
  `,
    styles: [],
    imports: [CommonModule, InfoComponent]
})
export class TestTwowaybindingComponent {
  name: string = 'Andrew';
}
