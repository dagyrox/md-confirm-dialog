import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Observable } from 'rxjs';
import { ConfirmDialogComponent, ConfirmDialogTextOptions } from './confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
  constructor(
    public dialog: MdDialog
  ) { }

  showModal(textOptions?: ConfirmDialogServiceTextOptions, width?: string): Observable<any> {
    let _textOptions: ConfirmDialogTextOptions = {
      message: 'Are you sure?',
      confirmText: 'Yes',
      denyText: 'No'
    };

    if (!!textOptions) {
      _textOptions.title = textOptions.title;
      _textOptions.message = textOptions.message || _textOptions.message;
      _textOptions.confirmText = textOptions.confirmText || _textOptions.confirmText;
      _textOptions.denyText = textOptions.denyText || _textOptions.denyText;
    }

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: !!width ? width : undefined,
      position: { top: '70px' },
      data: {
        textOptions: _textOptions
      }
    });

    return dialogRef.afterClosed();
  }

}

export class ConfirmDialogServiceTextOptions {
  title?: string;
  message?: string;
  confirmText?: string;
  denyText?: string;
}
