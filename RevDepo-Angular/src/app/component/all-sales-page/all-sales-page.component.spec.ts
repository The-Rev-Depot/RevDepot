import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AllSalesPageComponent } from './all-sales-page.component';

describe('AllSalesPageComponent', () => {
  let component: AllSalesPageComponent;
  let fixture: ComponentFixture<AllSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSalesPageComponent ],
      imports: [HttpClientModule, AppRoutingModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
