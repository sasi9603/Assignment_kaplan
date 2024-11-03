import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ErrorService', () => {
  let service: ErrorService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorService, multi: true },
        { provide: ErrorService, useClass: ErrorService }
      ]
    });
    service = TestBed.inject(ErrorService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
  });


  it('should handle a client-side error', (done) => {
    const errorEvent = new ErrorEvent('Client Error', {
      message: 'Network error occurred'
    });

    httpClient.get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').subscribe({
      next: () => done.fail('Expected an error, not data'),
      error: (error: Error) => {
        expect(error.message).toBe('Client-side error: Network error occurred');
        done();
      }
    });

    const req = httpMock.expectOne('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
    req.error(errorEvent);
  });

  it('should handle a server-side error', (done) => {
    httpClient.get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').subscribe({
      next: () => done.fail('Expected an error, not data'),
      error: (error: Error) => {
        expect(error.message).toBe('Server-side error: 500 - Http failure response for https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep: 500 Internal Server Error');
        done();
      }
    });

    const req = httpMock.expectOne('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
    req.flush('Internal Server Error', {
      status: 500,
      statusText: 'Internal Server Error'
    });
  });
});
