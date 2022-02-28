import { Component, OnInit } from '@angular/core';
import {Anschrift} from "../../model/anschrift";
import {VertragService} from "../../service/vertrag.service";
import {Bankverbindung} from "../../model/bankverbindung";
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bankverbindung',
  templateUrl: './bankverbindung.component.html',
  styleUrls: ['./bankverbindung.component.sass']
})
export class BankverbindungComponent implements OnInit {

  bankVerb: Bankverbindung;

  constructor(private vertragService: VertragService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bankVerb = new Bankverbindung();
    const id = this.activatedRoute.snapshot.params['id'];
    this.vertragService.getBankVerbById(id).subscribe(value => {
      this.bankVerb = value;
    })
  }
}
