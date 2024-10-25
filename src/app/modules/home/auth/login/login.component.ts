import { AuthService } from '@/app/shared/common/services/auth.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { User } from '@/app/shared/types/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NotificationsService,
    private route: Router
  ) {}

  formAuth!: FormGroup;

  ngOnInit(): void {
    this.formAuth = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  submitForm = () => {
    this.authService.login(this.formAuth.value as User).subscribe(data => {
      if (data) {
        this.notification.createNotification(
          'success',
          'Login success',
          'You login success'
        );
        this.route.navigate(['admin/dashboard']);
      } else {
        this.notification.createNotification(
          'error',
          'Login error',
          'You login error'
        );
      }
    });
  };
}
