import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContextFacade } from '../../../../core/facades/product-context.facade';

@Component({
  selector: 'ish-product-short-description',
  templateUrl: './product-short-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShortDescriptionComponent {
  @Input() maxLength = 150; // Default maximum length for short description
  @Input() alternate: string;

  shortDescription$: Observable<string>;
  visible$: Observable<boolean>;

  constructor(private context: ProductContextFacade) { }

  ngOnInit() {
    this.shortDescription$ = this.context.select('product', 'shortDescription');
    this.visible$ = this.context.select('displayProperties', 'description');
  }
}
