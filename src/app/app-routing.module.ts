import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KundeComponent} from "./vertrag/kunde/kunde.component";
import {KundenComponent} from "./vertrag/kunden/kunden.component";
import {AnschriftComponent} from "./vertrag/anschrift/anschrift.component";
import {BankverbindungComponent} from "./vertrag/bankverbindung/bankverbindung.component";
import {AddKundeComponent} from "./vertrag/add-kunde/add-kunde.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kunden',
    pathMatch: 'full'
  },
  {
    path: 'kunden',
    component: KundenComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'kunden/:id',
    component: KundeComponent
  },
  {
    path: 'anschrift/:id',
    component: AnschriftComponent
  },
  {
    path: 'bankverbindung/:id',
    component: BankverbindungComponent
  },
  {
    path: 'addKunde',
    component: AddKundeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
