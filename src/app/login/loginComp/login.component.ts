import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallMainService } from '../../services/api-call-main.service';
import { ApiNamesService } from '../../services/api-names.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  selector: 'app-login',
  providers: [HttpClientModule],
})
export class loginComp {
  loginForm = new FormGroup(
    {
      firstName: new FormControl('vijay', Validators.required),
      lastName: new FormControl('narwade', Validators.required),
      password: new FormControl('234567', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    },
    { validators: [Validators.nullValidator] }
  );

  private apiSev = inject(ApiCallMainService);
  private apiNames = inject(ApiNamesService);
  private router = inject(Router);
  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      // this.apiSev.callApiPost(
      //   {
      //     fName: this.loginForm.controls.firstName.value!,
      //     lName: this.loginForm.controls.lastName.value!,
      //   },
      //   this.apiNames.passwordApi
      // );
      this.apiSev.callApiGetData(this.apiNames.passwordApi).then((response) => {
        console.log('type', typeof response);
        response == this.loginForm.controls.password.value
          ? this.router.navigate(['/pre', 'billForm'])
          : console.log('wrong password');
      });
    }
    console.log('LoginForm', this.loginForm);
  }
}
