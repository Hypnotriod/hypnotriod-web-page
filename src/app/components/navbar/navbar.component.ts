import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbarWrapper') navbarWrapper: ElementRef;

  public navbarVisible: boolean = false;
  public isNavbarSticky: boolean = false;

  constructor() { }

  toggleNavbarVisibility() {
    this.navbarVisible = !this.navbarVisible;
  }

  hideNavbar() {
    this.navbarVisible = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: Event) {
    const scrollY: number = (event.currentTarget as Window).scrollY;
    this.isNavbarSticky = scrollY >= this.navbarWrapper.nativeElement.offsetTop;
  }
}
