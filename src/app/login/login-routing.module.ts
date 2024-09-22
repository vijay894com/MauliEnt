import { RouterModule, Routes } from '@angular/router';
import { loginComp } from './loginComp/login.component';
import { NgModule } from '@angular/core';
import { BillFormComponent } from './bill-form/bill-form.component';

const routes: Routes = [
  {
    path: '',
    component: loginComp,
  },
  {
    path: 'login',
    component: loginComp,
  },
  {
    path: 'billForm',
    component: BillFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class loginRoutingModule {}
