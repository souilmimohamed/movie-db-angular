import { Component, OnInit, Input } from '@angular/core';
import { productionCompany } from 'src/app/models/main.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prod-company-card',
  templateUrl: './prod-company-card.component.html',
  styleUrls: ['./prod-company-card.component.scss'],
})
export class ProdCompanyCardComponent implements OnInit {
  logoPath: string;
  @Input() company: productionCompany;
  constructor() {}

  ngOnInit(): void {
    this.logoPath = `${environment.imgApi}${this.company.logo_path}`;
  }
}
