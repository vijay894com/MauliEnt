import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { billPdf } from './login/bill-form/billPdf.service';
import { pdfService } from './services/pdfServ.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [billPdf, pdfService, Document],
  bootstrap: [AppComponent],
})
export class AppModule {}
