import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { SetupComponent } from './pages/setup/setup.component';
import {SetupModule} from './pages/setup/setup.module';
import {MainRoutingModule} from './pages/main/main-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainModule} from './pages/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SetupModule,
    MainModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
