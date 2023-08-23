import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestTwowaybindingComponent } from "./test-twowaybinding/test-twowaybinding.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TitleCodenameSelectorComponent } from "./title-codename-selector/title-codename-selector.component";
import { OptionButtonListComponent } from "./option-button-list/option-button-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, TestTwowaybindingComponent, ReactiveFormComponent, TitleCodenameSelectorComponent, OptionButtonListComponent]
})
export class AppComponent {
  title = 'simple-pratice';
}
