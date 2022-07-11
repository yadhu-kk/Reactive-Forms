import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
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

  ngOnInit(): void {}
}
