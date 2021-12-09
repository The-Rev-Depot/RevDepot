import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDealsComponent } from './sales-deals.component';

describe('SalesDealsComponent', () => {
  let component: SalesDealsComponent;
  let fixture: ComponentFixture<SalesDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
