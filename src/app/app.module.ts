import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { CorelModule } from './core/corel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    PhotosModule,
    HttpClientModule,
    ErrorsModule,
    AppRoutingModule,
    CorelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
