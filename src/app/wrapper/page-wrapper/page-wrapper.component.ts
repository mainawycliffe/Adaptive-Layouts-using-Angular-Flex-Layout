import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.css"]
})
export class PageWrapperComponent implements OnInit {
  public message: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.message = activatedRoute.snapshot.params["message"];
  }

  close(results): void {
    this.router.navigate(["/"]);
  }

  ngOnInit() {}
}
