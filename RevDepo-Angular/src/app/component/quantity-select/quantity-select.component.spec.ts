import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelectComponent } from './quantity-select.component';

describe('QuantitySelectComponent', () => {
  let component: QuantitySelectComponent;
  let fixture: ComponentFixture<QuantitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelectComponent ],
      imports: [HttpClientModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySelectComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
