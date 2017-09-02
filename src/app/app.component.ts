import { Component } from '@angular/core';

import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private ConfirmDialogService: ConfirmDialogService
  ) { }

  //example
  showModal(){
    this.ConfirmDialogService.showModal({
      title: 'Hello World',
      message: 'Do you want to leave the matrix?',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!'
    }, '450px').subscribe(result => {
      console.log('ConfrimDialogService closed with response: ' + result);
    });
  }

}
