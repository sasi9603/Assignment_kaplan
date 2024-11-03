import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BooksComponent } from './books/books.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorService } from './interceptors/error.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
