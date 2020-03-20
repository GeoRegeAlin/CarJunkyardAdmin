import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { RouterModule } from '@angular/router';
import { BrandSpecificComponent } from './brand-specific/brand-specific.component';
import { PartsComponent } from './parts/parts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    BrandSpecificComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
