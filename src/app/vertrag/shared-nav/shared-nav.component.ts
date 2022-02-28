import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Kunde} from "../../model/kunde";
import {VertragService} from "../../service/vertrag.service";
import {Anschrift} from "../../model/anschrift";
import {Bankverbindung} from "../../model/bankverbindung";

@Component({
  selector: 'app-shared-nav',
  templateUrl: './shared-nav.component.html',
  styleUrls: ['./shared-nav.component.sass']
})
export class SharedNavComponent implements OnInit {

  kunde: Kunde = new Kunde();

  id: number;

  constructor(private vertragService: VertragService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.vertragService.getKundeById(this.id).subscribe(value => {
      this.kunde = value;
    })
  }

  deleteKunde(id: number) {
    this.vertragService.deleteKunde(id).subscribe(value => {
      console.log(value);
    });
    this.router.navigate(['kunden']);
  }



}
