import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Patient } from './patiens.interface';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  personalForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  personalIdPattern = new RegExp('^[A-Z]{1}[1-2]{1}[0-9]{8}$');
  phonePatterm = new RegExp('^[0-9]{10}$');
  #patient?: Patient;

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      id: ['', Validators.required],
      personalId: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.personalIdPattern)]],
      name: ['', Validators.required],
      sex: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.phonePatterm)]],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.personalForm.valid) {
      this.#patient = this.personalForm.value;
      console.warn(this.#patient);
    } else {
      window.alert('請填寫完整的表單資料');
    }
  }

  onModifyNameByPatch() {
    // patchValue可以給特定的屬性 key-value
    this.personalForm.patchValue({
      name: '金城武'
    });
  }

  onModifyNameBySet() {
    // setValue要給完整的物件，缺一不可
    this.personalForm.setValue({
      id: '54362',
      personalId: 'G128736472',
      name: '億載金城武',
      sex: '男',
      birthday: '2023-08-01',
      phone: '0928456782',
      address: '台中市沙鹿區'
    });
  }
}
