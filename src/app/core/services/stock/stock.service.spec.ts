import { TestBed } from '@angular/core/testing';
import { instance, mock } from 'ts-mockito';

import { ApiService } from 'ish-core/services/api/api.service';

import { StockService } from './stock.service';

describe('Stock Service', () => {
  let apiServiceMock: ApiService;
  let stockService: StockService;

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useFactory: () => instance(apiServiceMock) }],
    });
    stockService = TestBed.inject(StockService);
  });

  it('should be created', () => {
    expect(stockService).toBeTruthy();
  });
});
