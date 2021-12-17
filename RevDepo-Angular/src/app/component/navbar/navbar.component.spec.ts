import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerSpy = {
    navigate: jasmine.createSpy('navigate')
 };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ NavbarComponent ],
      providers: [{
        provide: Router,
        useValue: routerSpy
     }],
     imports: [RouterTestingModule, HttpClientTestingModule] 
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should route to checkout', () => {
    const router = TestBed.get(Router);
    component.checkoutRoute();
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1);

  });

});


