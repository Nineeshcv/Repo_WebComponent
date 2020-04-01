import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {createCustomElement} from "@angular/elements";

//import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [InfoBoxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  entryComponents: [InfoBoxComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(InfoBoxComponent, { injector });
    customElements.define('info-box', el);
  }

  ngDoBootstrap() {}
}
