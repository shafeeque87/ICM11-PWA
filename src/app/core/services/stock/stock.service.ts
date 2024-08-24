import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiService } from 'ish-core/services/api/api.service';
import { Observable, map, switchMap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StockService {
  private stockHeaders = new HttpHeaders({
    Accept: 'application/vnd.intershop.stock.v1+json',
  });

  constructor(private apiService: ApiService) {}

  getStockInformation(sku$: Observable<string>): Observable<any[]> {
    if (!sku$) {
      return throwError(() => new Error('getStockInformation() called without skus'));
    }

    return sku$.pipe(
      switchMap(sku => {
        const params = new HttpParams().append('productSKU', sku);
        
        return this.apiService
          .get<{ data: any[] }>('stocks', { headers: this.stockHeaders, params })
          .pipe(map(response => response?.data));
      })
    );
  }
}
