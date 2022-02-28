import {Component, OnInit} from '@angular/core';
import {VertragService} from "../../service/vertrag.service";
import {Kunde} from "../../model/kunde";
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.sass']
})
export class KundeComponent implements OnInit {

  kunde: Kunde;

  constructor(private vertragService: VertragService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.kunde = new Kunde();
    const id = this.activatedRoute.snapshot.params['id'];
    this.vertragService.getKundeById(id).subscribe(value => {
      this.kunde = value;
    })
  }

  valueChange(event: any) {
    console.log(event);
    this.kunde.name = event;

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
