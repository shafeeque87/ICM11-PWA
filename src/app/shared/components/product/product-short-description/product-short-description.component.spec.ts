import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShortDescriptionComponent } from './product-short-description.component';

describe('Product Short Description Component', () => {
  let component: ProductShortDescriptionComponent;
  let fixture: ComponentFixture<ProductShortDescriptionComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductShortDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShortDescriptionComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
