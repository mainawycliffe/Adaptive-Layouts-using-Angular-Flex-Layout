import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-wrapper",
  templateUrl: "./modal-wrapper.component.html",
  styleUrls: ["./modal-wrapper.component.css"]
})
export class ModalWrapperComponent implements OnInit {
  public message: string;

  constructor(private dialogRef: MatDialogRef<ModalWrapperComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
    console.log(this.message);
  }

  close(results): void {
    this.dialogRef.close(results);
  }

  ngOnInit() {}
}
