import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComp } from './loginComp/login.component';
import { loginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillFormComponent } from './bill-form/bill-form.component';
import { pdfService } from '../services/pdfServ.service';
import { billPdf } from './bill-form/billPdf.service';
import { StorageServiceService } from '../services/storage-service.service';

@NgModule({
  declarations: [loginComp, BillFormComponent],
  imports: [CommonModule, loginRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [pdfService, billPdf, StorageServiceService],
})
export class LoginModule {}
