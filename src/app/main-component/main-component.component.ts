import { Component, OnInit } from "@angular/core";
import { ObservableMedia } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { ModalWrapperComponent } from "./../wrapper/modal-wrapper/modal-wrapper.component";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  constructor(private media: ObservableMedia, private router: Router, private matDialog: MatDialog) {}

  ngOnInit() {}

  open(): void {
    if (this.media.isActive("lt-md")) {
      //redirect
      let message: string =
        "You have just opened me on a screen size of less than 956px, probably an ipad or a smarphone";
      this.router.navigate(["/open", message]);
    } else {
      //show dialog
      let message: string = "You have just opened me on a screen size greater than 956px, probably a PC";
      const d = this.matDialog.open(ModalWrapperComponent, {
        hasBackdrop: true,
        disableClose: false,
        data: {
          message: message
        }
      });

      d.afterClosed().subscribe(results => {
        //do something like show a message box
      });
    }
  }
}
