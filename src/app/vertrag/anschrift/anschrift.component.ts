import { Component, OnInit } from '@angular/core';
import {Kunde} from "../../model/kunde";
import {VertragService} from "../../service/vertrag.service";
import {Anschrift} from "../../model/anschrift";
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anschrift',
  templateUrl: './anschrift.component.html',
  styleUrls: ['./anschrift.component.sass']
})
export class AnschriftComponent implements OnInit {

  anschrift: Anschrift;

  kunde: Kunde;

  constructor(private vertragService: VertragService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.anschrift = new Anschrift();
    const id = this.activatedRoute.snapshot.params['id'];
    this.vertragService.getAnschriftById(id).subscribe(value => {
      this.anschrift = value;
    })
    this.vertragService.getKundeById(id).subscribe(value => {
      this.kunde = value;
    })
  }

  valueChange(event: string) {
    console.log(event);
    this.kunde.anschrift.strasse = event;
  }

  onSubmit() {
    //this.kunde = new Kunde();
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.kunde);
    console.log(id);
    //this.kunde.anschrift = new Anschrift();
    //this.kunde.bankverbindung = new Bankverbindung();
    this.vertragService.updateKunde(id, this.kunde)
      .subscribe(data => {
        console.log("k2: " + data);
        console.log("k3: " + data.name);
        console.log("k4: " + this.kunde.name);
      });
    this.kunde = new Kunde();
    this.router.navigate(['/kunden']);


  }

}
