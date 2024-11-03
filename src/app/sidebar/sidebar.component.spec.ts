import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent], // Declare the component being tested
    }).compileComponents();

    // Create the component and test fixture
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Run change detection
  });

  it('should toggle sidebar state', () => {
    // Initially, the sidebar should be closed
    expect(component.isCollapsed).toBeFalse(); // Access the property after initialization

    // Call toggleSidebar() to open the sidebar
    component.toggleSidebar();
    expect(component.isCollapsed).toBeTrue(); // Expect it to be open

    // Call toggleSidebar() again to close the sidebar
    component.toggleSidebar();
    expect(component.isCollapsed).toBeFalse(); // Expect it to be closed
  });
});
