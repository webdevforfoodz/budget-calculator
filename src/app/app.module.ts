import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InputformComponent } from './components/home/inputform/inputform.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/home/list/list.component';
import { CardComponent } from './components/home/list/card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditFormDialogComponent } from './components/edit-form-dialog/edit-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputformComponent,
    ListComponent,
    CardComponent,
    EditFormDialogComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    InputformComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
