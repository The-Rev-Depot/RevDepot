import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardComponent } from './cart-card.component';

describe('CartCardComponent', () => {
  let component: CartCardComponent;
  let fixture: ComponentFixture<CartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCardComponent ],
      imports: [HttpClientModule],
      providers: [HttpClient],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    component.item = {
      itemId: 0, quantity: 5, product: {
        productId: 1,
        productName: "Computer Tower Stand",
        description: "",
        picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        productPrice: 15,
        productRating: 0,
        category: "",
        isOnSale: 0
      }
    };

    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
