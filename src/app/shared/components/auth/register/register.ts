import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../../../core/services/auth'

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private authService: Auth) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log("clicked")
    this.submitted = true;

    if (this.registerForm.invalid) return;

    this.loading = true;

    const payload = this.registerForm.value;

    console.log('Register Payload:', payload);
    this.authService.register(payload).subscribe((res) => {
      console.log('API Response:', res);
    });
    // TODO: API call
    setTimeout(() => {
      this.loading = false;
      alert('Registration successful');
      this.registerForm.reset();
      this.submitted = false;
    }, 1000);
  }
}
