import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { DisplayProductsComponent } from './display-products.component';
import { ProductClass } from 'src/app/model/product-class';
import { By } from '@angular/platform-browser';
import { UpperCasePipe } from '@angular/common';

fdescribe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProductsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Testing card",()=>{

    expect(component.categoriesArray[0]).toBe(component.Apparel);

  });

  /*
  describe('queryAll', () => {
    it('should show the correct number of elements', () => {
      component.categoriesArray = [component.Apparel, component.Stationary, component.Accessories];

      fixture.detectChanges();

    expect(component.categoriesArray[0]).toBe("apparel");
  });

    it('should pass down the correct data to its child components', () => {
      component.categoriesArray = ["APPAREL", "STATIONARY", "ACCESSORIES"];

      fixture.detectChanges();

      const elements = fixture.debugElement.queryAll(By.css('#spacing'));
      for (let i = 0; i < component.categoriesArray.length; i++) {
          expect(elements[i].nativeElement.innerText).toContain(component.categoriesArray[i]);
  */

});

