import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiComponentsModule } from '@holzgerlingen-nx/ui-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
