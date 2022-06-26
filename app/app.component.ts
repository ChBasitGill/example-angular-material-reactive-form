import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formGroup: FormGroup;
  post;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email])
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('email') ? 'Not a valid email address' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

}