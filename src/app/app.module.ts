import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {PersonneService} from './services/personne.service';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        NgxPaginationModule,
        HttpClientModule,
        MatIconModule
    ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
