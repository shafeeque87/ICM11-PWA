import { Component, OnInit } from '@angular/core';
import { ProductContextFacade } from 'ish-core/facades/product-context.facade';
import { StockService } from 'ish-core/services/stock/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ish-stock',
  templateUrl: './stock.component.html', // Point to the HTML file
  // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class StockComponent implements OnInit {
  stockInformation: any[];
  visible$: Observable<boolean>;
  sku$: Observable<string>;
  total: number = 0;

  constructor(private stockService: StockService,private context: ProductContextFacade) {}

  ngOnInit() {
    //['FicusBenjamini']
    this.visible$ = this.context.select('displayProperties', 'sku');
    
    this.sku$ = this.context.select('product', 'sku');
    this.stockService.getStockInformation(this.sku$).subscribe(data => {
      this.stockInformation = data;
      this.stockInformation.forEach(stock =>
       this.total = this.total+stock.count
        )
    });
  }
}
