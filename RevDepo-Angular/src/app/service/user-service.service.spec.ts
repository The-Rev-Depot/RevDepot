import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
