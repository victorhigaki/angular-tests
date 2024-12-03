import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data and return list of fruits', () => {
    const expectedFruits = ['uva', 'abacaxi'];

    service.getFruits().subscribe((x) => expect(x).toEqual(expectedFruits));

    const req = httpMock.expectOne('http://localhost:3000/fruits');
    expect(req.request.method).toBe('GET');
    req.flush(expectedFruits);
  });
});
