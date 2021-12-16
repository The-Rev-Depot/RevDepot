import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchbarComponent } from './searchbar.component';
import { ProductServiceService } from 'src/app/service/product-service.service';
// import { of } from 'rxjs/observable/of';

fdescribe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;
  let serviceStub : any;

  beforeEach(async () => {

    // serviceStub = {
    //   getContent: () => of() // what goes here? a mock list of things?
    // }

    await TestBed.configureTestingModule({
      imports : [HttpClientModule, RouterTestingModule],
      declarations: [ SearchbarComponent ]
      // providers : [ { provide: ProductServiceService, useValue: serviceStub } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchText should be empty string', () => {
    expect(component.searchText).toBe("");
  });

  it('mockProduct should be an array of length 3', () => {
    expect(component.mockProduct.length).toEqual(3);
  });

  it('checkLetter should return an array', () => {
    expect(component.checkLetter(component.mockProduct,"mug"))
    .toEqual([{
      productId : 2,
      productName : "Mug",
      description : "A nice revature mug!",
      picURL : "mug.url...",
      productPrice : 5 ,
      productRating : 4 ,
      category : "Miscellaneous",
      isOnSale : 1 }])
  });

  it('filteredList("") should return empty array', () => {
    expect(component.filteredList("")).toEqual([]);
  });

  it('filteredList("notebook") should return an array of length 1', () => {
    expect(component.filteredList("notebook").length).toBe(1);
  });
  

  // it('', () => {
    
  // });
  

});
