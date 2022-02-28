import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KundeComponent} from './vertrag/kunde/kunde.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {VertragService} from "./service/vertrag.service";
import {KundenComponent} from './vertrag/kunden/kunden.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AnschriftComponent} from './vertrag/anschrift/anschrift.component';
import {BankverbindungComponent} from './vertrag/bankverbindung/bankverbindung.component';
import {SharedNavComponent} from './vertrag/shared-nav/shared-nav.component';
import {EffectsModule} from '@ngrx/effects';
import { AddKundeComponent } from './vertrag/add-kunde/add-kunde.component';
//import {VertragEffects} from "./vertrag-store/effects";
//import {vertragReducer} from './vertrag-store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    KundeComponent,
    KundenComponent,
    AnschriftComponent,
    BankverbindungComponent,
    SharedNavComponent,
    AddKundeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    //StoreModule.forFeature('originalKunde', vertragReducer),
    //EffectsModule.forFeature([VertragEffects])
  ],
  providers: [VertragService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
