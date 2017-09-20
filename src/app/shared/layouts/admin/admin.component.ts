import { Component, OnInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'tox-layout-admin',
  templateUrl: './admin.component.html'
})
export class LayoutAdminComponent implements OnInit {

  sidebarVisible: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSidebar(event);
  }

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.setSidebarByWidth(window.innerWidth);
  }

  toggleSidebar() {
    if (this.sidebarVisible) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  }

  setSidebar(event) {
    const width = (event.target.innerWidth > 0) ? event.target.innerWidth : event.screen.width;
    this.setSidebarByWidth(width);
  }

  setSidebarByWidth(width) {
    if (width < 992) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  }

  showSidebar() {
    this.sidebarVisible = true;
    this.renderer.addClass(document.body, 'show-sidebar');
  }

  hideSidebar() {
    this.sidebarVisible = false;
    this.renderer.removeClass(document.body, 'show-sidebar');
  }
}
