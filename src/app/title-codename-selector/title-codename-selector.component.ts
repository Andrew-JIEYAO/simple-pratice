import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title-codename-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="display: flex;">
      <!-- Title List -->
      <div style="margin-right: 20px;">
        <h3>醫師姓氏</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li
            *ngFor="let item of data"
            (click)="onSelectTitle(item.title)"
            [style.background-color]="selectedTitle === item.title ? '#f0f0f0' : 'transparent'"
            [style.cursor]="'pointer'"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>

      <!-- CodeName List -->
      <div>
        <h3>醫師：</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li
            *ngFor="let codeName of getCodeNamesByTitle(selectedTitle)"
            (click)="onSelectCodeName(codeName)"
            [style.background-color]="selectedCodeName === codeName.code ? '#f0f0f0' : 'transparent'"
            [style.cursor]="'pointer'"
          >
            {{ codeName.name }}
          </li>
        </ul>
      </div>
    </div>

    <p>選擇的姓氏：{{ selectedTitle }}</p>
    <p>選擇的代碼：{{ selectedCodeName }}</p>
  `,
  styles: [
  ]
})
export class TitleCodenameSelectorComponent {
  data: DataItem[] = [
    {
      "title": "王",
      "codeName": [
        {
          "code": "123",
          "name": "王小華"
        },
        {
          "code": "765",
          "name": "王小明"
        }
      ]
    },
    {
      "title": "林",
      "codeName": [
        {
          "code": "872",
          "name": "林阿花"
        },
        {
          "code": "449",
          "name": "林小美"
        }
      ]
    },
    {
      "title": "陳",
      "codeName": [
        {
          "code": "546",
          "name": "陳大鵬"
        },
        {
          "code": "234",
          "name": "陳小蓮"
        }
      ]
    },
    {
      "title": "張",
      "codeName": [
        {
          "code": "987",
          "name": "張大明"
        },
        {
          "code": "456",
          "name": "張小芳"
        }
      ]
    },
    {
      "title": "李",
      "codeName": [
        {
          "code": "346",
          "name": "李大山"
        },
        {
          "code": "756",
          "name": "李小強"
        }
      ]
    },
    {
      "title": "黃",
      "codeName": [
        {
          "code": "187",
          "name": "黃小雯"
        },
        {
          "code": "567",
          "name": "黃阿忠"
        }
      ]
    },
    {
      "title": "劉",
      "codeName": [
        {
          "code": "198",
          "name": "劉小娟"
        },
        {
          "code": "312",
          "name": "劉阿輝"
        }
      ]
    },
    {
      "title": "吳",
      "codeName": [
        {
          "code": "453",
          "name": "吳小芬"
        },
        {
          "code": "756",
          "name": "吳阿偉"
        }
      ]
    },
    {
      "title": "蔡",
      "codeName": [
        {
          "code": "234",
          "name": "蔡小英"
        },
        {
          "code": "768",
          "name": "蔡大翔"
        }
      ]
    },
    {
      "title": "楊",
      "codeName": [
        {
          "code": "876",
          "name": "楊小琳"
        },
        {
          "code": "234",
          "name": "楊阿福"
        }
      ]
    }
  ];

  selectedTitle: string = '';
  selectedCodeName?: string | null;

  onSelectTitle(title: string) {
    this.selectedTitle = title;
    this.selectedCodeName = null; // Reset the selected code when a new title is selected
  }

  onSelectCodeName(codeName: CodeName) {
    this.selectedCodeName = codeName.code;
  }

  getCodeNamesByTitle(title: string): CodeName[] {
    const item = this.data.find(dataItem => dataItem.title === title) || this.data[0];
    return item ? item.codeName : [];
  }
}


interface CodeName {
  code: string;
  name: string;
}

interface DataItem {
  title: string;
  codeName: CodeName[];
}
