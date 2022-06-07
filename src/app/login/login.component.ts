import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { AuthService } from 'src/app/shared/services/authservice/auth.service'
import { throwError } from 'rxjs/internal/observable/throwError'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  signinForm: FormGroup
  closed = true

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router

  ) {
    this.signinForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

//   login() {
//     console.log(this.signinForm.value)
//     this.authService.login(this.signinForm.value).subscribe(
//       (res: any) => {
//         localStorage.setItem('access_token', res.token)
//         localStorage.setItem('user_id', res._id)
//         this.authService.currentUser = res._id
//         this.router.navigate(['/dashboard'])
//       },
//       () => {
//         this.closed = false
//         throwError('mag niet')
//       }
//     )
//   }

 }

