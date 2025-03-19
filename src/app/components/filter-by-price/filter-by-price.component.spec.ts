import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPriceComponent } from './filter-by-price.component';

describe('FilterByPriceComponent', () => {
  let component: FilterByPriceComponent;
  let fixture: ComponentFixture<FilterByPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
