import {Component, OnInit} from '@angular/core';
import {VertragService} from "./service/vertrag.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'vertrag-ui';

  vertraege: Array<any>;



  constructor(private vertragService: VertragService, private router: Router) {
  }

  kundeDetail(id: number) {
    this.router.navigate(["kunden/" + id]);
    //this.vertragService.getKundeById(id);
  }

  ngOnInit(): void {
    this.vertragService.getAllKunde().subscribe(value => {
      this.vertraege = value
    })
  }
}
