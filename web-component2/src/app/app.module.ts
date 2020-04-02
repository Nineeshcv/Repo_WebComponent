
import { NgModule, Injector } from '@angular/core';

//import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    //AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
  entryComponents: [CardComponent]
})
export class AppModule { 

  constructor(private injector: Injector){
    const customEle = createCustomElement(CardComponent,{injector : this.injector});
    customElements.define('card-tag', customEle);
  }

  ngDoBootstrap(){
     
  }

}
