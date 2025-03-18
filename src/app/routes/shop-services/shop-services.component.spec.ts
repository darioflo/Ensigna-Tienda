import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopServicesComponent } from './shop-services.component';

describe('ShopServicesComponent', () => {
  let component: ShopServicesComponent;
  let fixture: ComponentFixture<ShopServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
