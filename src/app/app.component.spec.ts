import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Declare the component being tested
    }).compileComponents();

    // Create the component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Run change detection
  });

  it('should toggle sidebar state', () => {
    // Initially, the sidebar should be closed
    expect(component.isSidebarOpen).toBeFalse(); // Access the property after initialization

    // Call toggleSidebar() to open the sidebar
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBeTrue(); // Expect it to be open

    // Call toggleSidebar() again to close the sidebar
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBeFalse(); // Expect it to be closed
  });
});
