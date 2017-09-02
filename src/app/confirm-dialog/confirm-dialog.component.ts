import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  textOptions:  ConfirmDialogTextOptions;
  
    constructor(
      private dialogRef: MdDialogRef<ConfirmDialogComponent>,
      @Inject(MD_DIALOG_DATA) private data: any
    ) { }
  
    ngOnInit() {
      this.textOptions = this.data.textOptions;
    }
  
  }
  
  export class ConfirmDialogTextOptions {
    title?: string;
    message: string;
    confirmText: string;
    denyText: string;
  }
  