import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomGridComponent,
  ],
  imports: [
 BrowserModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
