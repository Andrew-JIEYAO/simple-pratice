import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-option-button-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './option-button-list.component.html',
  styleUrls: ['./option-button-list.component.scss']
})
export class OptionButtonListComponent {

  buttonCount: number = 0;
  buttons: any[] = [];
  options: string[] = ['預約', '現場', 'VIP', '初診'];
  selectedOption: string = '';
  selectedDropdownOption: string = 'none';

  generateButtons() {
    this.buttons = Array.from({ length: this.buttonCount }, (_, index) => ({ label: `${index + 1}`, index: index + 1 }));
  }

  updateButtonLabel(button: any) {
    if (this.selectedOption) {
      button.label = this.selectedOption;
    }
  }

  updateButtonLabels() {
    if (this.selectedDropdownOption === 'singleReserveDoubleOnsite') {
      this.buttons.forEach((button, index) => {
        if ((index + 1) % 2 === 1) {
          button.label = '預約';
        } else {
          button.label = '現場';
        }
      });
    } else if (this.selectedDropdownOption === 'singleOnsiteDoubleReserve') {
      this.buttons.forEach((button, index) => {
        if ((index + 1) % 2 === 1) {
          button.label = '現場';
        } else {
          button.label = '預約';
        }
      });
    } else if (this.selectedDropdownOption === 'noOnsite') {
      this.buttons.forEach(button => {
        button.label = '預約';
      });
    }
  }

  getButtonColor(label: string): string {
    switch (label) {
      case '預約':
        return 'green';
      case '現場':
        return 'blue';
      case 'VIP':
        return 'orange';
      case '初診':
        return 'purple';
      default:
        return 'grey';
    }
  }

  exportButtonsToJson() {
    const buttonsData = this.buttons.map(button => {
      return {
        index: button.index,
        status: button.label,
      };
    });

    const jsonOutput = JSON.stringify(buttonsData, null, 2);
    console.log(jsonOutput);
  }
}


