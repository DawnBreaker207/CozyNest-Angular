import { AuthService } from '@/app/core/services/auth.service';
import { NotificationsService } from '@/app/shared/common/services/notifications.service';
import { User } from '@/app/shared/types/user';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    RouterLink,
  ],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  password?: string;
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
    this.authService.login$(this.formAuth.value as User).subscribe(data => {
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
