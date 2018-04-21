import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSnackBarModule, MatDialogModule, MatButtonModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { PageWrapperComponent } from "./wrapper/page-wrapper/page-wrapper.component";
import { ModalWrapperComponent } from "./wrapper/modal-wrapper/modal-wrapper.component";
import { FormComponent } from "./form/form.component";
import { MainComponentComponent } from "./main-component/main-component.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponentComponent
  },
  {
    path: "open/:message",
    component: PageWrapperComponent
  }
];

@NgModule({
  declarations: [AppComponent, PageWrapperComponent, ModalWrapperComponent, FormComponent, MainComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalWrapperComponent]
})
export class AppModule {}
