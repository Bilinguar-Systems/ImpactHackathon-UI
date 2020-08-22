import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  templateUrl: './register.component.html', styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      email: ['', Validators.email],
      image: ['', Validators.required],

      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.onVerify(data);
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        error => {
          alert(error);
          this.loading = false;
        });
  }
  onVerifyChanged(event){
    this.selectedFile = event.target.files[0]
  }
  onVerify(userRegistered){
    this.authenticationService.verify(this.selectedFile,userRegistered['id'])
  }
}
