import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  @Input() isSidebarVisible = false;

  menuItems = [
    { label: 'CONTENT MANGEMENT', icon:'pi pi-book'},
    { label: 'COURSES', icon:'pi pi-file-o' },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
