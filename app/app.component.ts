import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  startDate = new Date(1990, 0, 1);
  formGroup: FormGroup;
  post;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateofbirth: new FormControl(null, []),
    });
  }

  getError(type) {
    if (type === 'name') {
      return this.formGroup.get('name').hasError('required')
        ? 'Field is required'
        : '';
    } else if (type === 'email') {
      return this.formGroup.get('email').hasError('required')
        ? 'Field is required'
        : this.formGroup.get('email').hasError('email')
        ? 'Not a valid email address'
        : '';
    } else return '';
  }

  onSubmit(post) {
    this.post = post;
  }
}
