import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, ActivatedRoute, Routes, RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from './product-card.component';
import { ProductClass } from 'src/app/model/product-class';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';

fdescribe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let service: ProductServiceService;
  let httpClientSpy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ProductCardComponent ]

    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductServiceService(httpClientSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Testing sort",()=>{

    const dealTitle = Boolean (1);
    expect(component.getProduct(dealTitle)).toBe(component.productsArray[0]);

  });

});
