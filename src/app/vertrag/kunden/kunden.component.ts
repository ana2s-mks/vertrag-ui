import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VertragService} from "../../service/vertrag.service";

@Component({
  selector: 'app-kunden',
  templateUrl: './kunden.component.html',
  styleUrls: ['./kunden.component.sass']
})
export class KundenComponent implements OnInit {

  vertraege: Array<any>;

  //selectKundeVertrag$: Observable<Kunde[] | undefined> = this.store$.pipe(select(selectGetKunde));


  constructor(private vertragService: VertragService, private router: Router) {
  }

  kundeDetail(id: number) {
    this.router.navigate(["kunden/" + id]);
  }



  ngOnInit(): void {
    this.vertragService.getAllKunde().subscribe(value => {
      this.vertraege = value
    })

  }
}
