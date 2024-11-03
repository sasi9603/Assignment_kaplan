import { TestBed } from '@angular/core/testing';

import { InstanceService } from './instance.service';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';

describe('InstanceService', () => {
  let service: InstanceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[InstanceService]
    });
    service = TestBed.inject(InstanceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve book details via GET', () => {
    let mockApiURL = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep'; // Replace with the actual URL
    let mockBooks = [
      { id: 1, title: 'Book One' },
      { id: 2, title: 'Book Two' },
    ];
    service.apiURL = mockApiURL; // Ensure the URL is correctly set if it's a property

    service.getBooksDetails().subscribe((data:any) => {
      expect(data).toEqual(mockBooks);
    });

    // Define the request expectation
    const req = httpTestingController.expectOne(mockApiURL);
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockBooks);
  });
});
