import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  get Add() {
    return this.registerForm.get('Add') as FormArray;
  }
  TypeofProject = [
    'Web development',
    'Mobile development',
    'Hire a developer',
    'Other',
  ];

  constructor(private fb: FormBuilder) {}
  submit = false;
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    Phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    Company: ['', Validators.required],
    TypeofProject: ['', Validators.required],
    Description: ['', Validators.required],
    Add: this.fb.array([]),
  });
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submit = true;
    if (this.registerForm.valid) {
      alert('submitted');
    }
  }
  addInput() {
    this.Add.push(this.fb.control(''));
  }
  removeInput(idx: number) {
    this.Add.removeAt(idx);
  }

  ngOnInit(): void {}
}
