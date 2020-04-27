import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [
    AppComponent,TabComponent,TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
