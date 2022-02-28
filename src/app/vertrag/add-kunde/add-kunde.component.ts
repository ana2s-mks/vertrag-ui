import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Kunde} from "../../model/kunde";
import {VertragService} from "../../service/vertrag.service";
import {Anschrift} from "../../model/anschrift";
import {Bankverbindung} from "../../model/bankverbindung";

@Component({
  selector: 'app-add-kunde',
  templateUrl: './add-kunde.component.html',
  styleUrls: ['./add-kunde.component.sass']
})
export class AddKundeComponent implements OnInit {

  kunde: Kunde = new Kunde();

  anschrift: Anschrift = new Anschrift();

  bankverbindung: Bankverbindung = new Bankverbindung();

  submitted = false;

  constructor(private vertragService: VertragService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.kunde.anschrift = this.anschrift;
    this.kunde.bankverbindung = this.bankverbindung;
    this.vertragService.addKunde(this.kunde)
      .subscribe(data => console.log(data), error => console.log(error));
    this.kunde = new Kunde();
    this.router.navigate(['/kunden']);
  }
}
