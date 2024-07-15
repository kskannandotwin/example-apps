import { Component } from '@angular/core';
import { SalesTaxService } from '../sales-tax.service';
import { TaxRateService } from '../tax-rate.service';

@Component({
  selector: 'app-sales-tax',
  templateUrl: './sales-tax.component.html',
  styleUrls: ['./sales-tax.component.scss'],
  providers: [SalesTaxService, TaxRateService]
})
export class SalesTaxComponent {
  constructor(private salesTaxService: SalesTaxService) {}

  getTax(value: number | string) {
        return this.salesTaxService.getVAT(value);
  }
}
