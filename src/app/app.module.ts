import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdConfirmDialogModule } from './md-confirm-dialog/md-confirm-dialog.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdConfirmDialogModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
