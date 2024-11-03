import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InstanceService } from '../instance.service';
import { AppModule } from '../app.module';
import { of, throwError } from 'rxjs';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let mockGetElementsAtEventForMode: jasmine.Spy;
  let service: InstanceService;
  let instanceService: jasmine.SpyObj<InstanceService>;
  beforeEach(async () => {
        // Create a spy object for InstanceService
    const spy = jasmine.createSpyObj('InstanceService', ['getBooksDetails']);
    await TestBed.configureTestingModule({
      imports: [AppModule,HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [InstanceService],
      declarations: [ BooksComponent ]
    })
    service = TestBed.inject(InstanceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
      // Initialize the `books` array with mock data before each test
      component.books = [
        {
          volumeInfo: {
            title: 'Book One', publisher: 'Publisher A', publishedDate: '2020',
            authors: []
          },
          kind: '',
          id: '',
          etag: '',
          selfLink: ''
        },
        {
          volumeInfo: {
            title: 'Book Two', publisher: 'Publisher B', publishedDate: '2021',
            authors: []
          },
          kind: '',
          id: '',
          etag: '',
          selfLink: ''
        },
        {
          volumeInfo: {
            title: 'Another Book', publisher: 'Publisher A', publishedDate: '2022',
            authors: []
          },
          kind: '',
          id: '',
          etag: '',
          selfLink: ''
        },
      ];
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should call  ngOnInit()',()=>{
    component.ngOnInit();
  });
  it('Should call getAllDetails()',()=>{
    let getBooksData = spyOn(service,"getBooksDetails").and.returnValue(of({
      data:[
        {
          
            "kind": "books#volumes",
            "totalItems": 1455,
            "items": [
              {
                "kind": "books#volume",
                "id": "vdDVDwAAQBAJ",
                "etag": "ELSkgxRSVhM",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/vdDVDwAAQBAJ",
                "volumeInfo": {
                  "title": "Score Higher on the UCAT",
                  "subtitle": "1500 Questions + Online",
                  "authors": [
                    "Kaplan Test Prep"
                  ],
                  "publisher": "Kaplan Test Prep",
                  "publishedDate": "2020-04-07",
                  "description": "The Expert Guide from Kaplan for 2021 entry One test stands between you and a place at the medical school of your dreams: the UCAT. With 1,500 questions, test-like practice exams, a question bank, and online test updates, Kaplan’s Score Higher on the UCAT, sixth edition, will help build your confidence and make sure you achieve a high score. We know it's crucial that you go into your UCAT exam equipped with the most up-to-date information available. Score Higher on the UCAT comes with access to additional online resources, including any recent exam changes, hundreds of questions, an online question bank, and a mock online test with full worked answers to ensure that there are no surprises waiting for you on test day. The Most Practice 1,500 questions in the book and online—more than any other UCAT book Three full-length tests: one mock online test to help you practise for speed and accuracy in a test-like interface, and two tests with worked answers in the book Online question bank to fine-tune and master your performance on specific question types Expert Guidance The authors of Score Higher on the UCAT have helped thousands of students prepare for the exam. They offer invaluable tips and strategies for every section of the test, helping you to avoid the common pitfalls that trip up other UCAT students. We invented test preparation—Kaplan (www.kaptest.co.uk) has been helping students for 80 years. Our proven strategies have helped legions of students achieve their dreams.",
                  "industryIdentifiers": [
                    {
                      "type": "ISBN_13",
                      "identifier": "9781506260297"
                    },
                    {
                      "type": "ISBN_10",
                      "identifier": "1506260292"
                    }
                  ],
                  "readingModes": {
                    "text": false,
                    "image": false
                  },
                  "pageCount": 497,
                  "printType": "BOOK",
                  "categories": [
                    "Medical"
                  ],
                  "maturityRating": "NOT_MATURE",
                  "allowAnonLogging": false,
                  "contentVersion": "0.1.2.0.preview.0",
                  "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                  },
                  "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=vdDVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=vdDVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                  },
                  "language": "en",
                  "previewLink": "http://books.google.co.in/books?id=vdDVDwAAQBAJ&printsec=frontcover&dq=kaplan+test+prep&hl=&cd=1&source=gbs_api",
                  "infoLink": "http://books.google.co.in/books?id=vdDVDwAAQBAJ&dq=kaplan+test+prep&hl=&source=gbs_api",
                  "canonicalVolumeLink": "https://books.google.com/books/about/Score_Higher_on_the_UCAT.html?hl=&id=vdDVDwAAQBAJ"
                },
                "saleInfo": {
                  "country": "IN",
                  "saleability": "NOT_FOR_SALE",
                  "isEbook": false
                },
                "accessInfo": {
                  "country": "IN",
                  "viewability": "PARTIAL",
                  "embeddable": true,
                  "publicDomain": false,
                  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                  "epub": {
                    "isAvailable": false
                  },
                  "pdf": {
                    "isAvailable": false
                  },
                  "webReaderLink": "http://play.google.com/books/reader?id=vdDVDwAAQBAJ&hl=&source=gbs_api",
                  "accessViewStatus": "SAMPLE",
                  "quoteSharingAllowed": false
                },
                "searchInfo": {
                  "textSnippet": "The Expert Guide from Kaplan for 2021 entry One test stands between you and a place at the medical school of your dreams: the UCAT."
                }
              },
            
            ]
          }
          ]
    }))
    component.getAllDetails();
    component.ngOnInit();
    expect(getBooksData).toHaveBeenCalled();
  })

  it('Should call getAllDetails() Error ',()=>{
    let getBooksData = spyOn(service,"getBooksDetails").and.returnValue(
      throwError (()=> new Error("errorMessage"))
    );
    component.getAllDetails();
    expect(getBooksData).toHaveBeenCalled();
  });

  it('should return all books when searchText is empty', () => {
    component.searchText = '';
    const filteredBooks = component.filteredBooks;

    expect(filteredBooks.length).toBe(3); // Should return all books
    expect(filteredBooks).toEqual(component.books); // Should match the original books list
  });

  it('should filter books based on title', () => {
    component.searchText = 'book';
    const filteredBooks = component.filteredBooks;

    expect(filteredBooks.length).toBe(3); // Should match all books containing 'book' in title
  });

  it('should filter books based on publishedDate', () => {
    component.searchText = '2021';
    const filteredBooks = component.filteredBooks;

    expect(filteredBooks.length).toBe(1); // Only one book published in 2021
    expect(filteredBooks[0].volumeInfo.title).toBe('Book Two');
  });

  it('should return an empty array if no books match the search text', () => {
    component.searchText = 'non-existent';
    const filteredBooks = component.filteredBooks;

    expect(filteredBooks.length).toBe(0); // No books should match
  });
});


