import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { RouterModule } from '@angular/router';
import { BrandSpecificComponent } from './brand-specific/brand-specific.component';
import { PartsComponent } from './parts/parts.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { AddEngineComponent } from './add-engine/add-engine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    BrandSpecificComponent,
    PartsComponent,
    AddEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEngineComponent]
})
export class AppModule { }
