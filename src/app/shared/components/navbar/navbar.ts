import { Component, HostListener, signal } from '@angular/core';
import { SideNav } from "../side-nav/side-nav";
import { SocialIcons } from "../social-icons/social-icons";

@Component({
  selector: 'app-navbar',
  imports: [SideNav, SocialIcons],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  windowScrolled = signal(false);
  openSidebar = signal(false);
  navLinks = [
    { label: 'Home' , icon:'fa-solid fa-house' },
    { label: 'About', icon:'fa-solid fa-circle-info' },
    { label: 'reviews', icon:'fa-solid fa-star' },
    { label: 'Contact', icon:'fa-solid fa-envelope' },
  ];


  @HostListener('window:scroll', ["$event"])
  onWindowScroll(event:any) {
    this.windowScrolled.set(window.pageYOffset > 100);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if(sectionId=='hero'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    else if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }







}
