import { Component, input, signal } from '@angular/core';
import { NavLink } from '../../models/nav-link';
import { SocialIcons } from "../social-icons/social-icons";


@Component({
  selector: 'app-side-nav',
  imports: [SocialIcons],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  navLinks = input.required<NavLink[]>();
  linkClicked = signal<boolean>(false)

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (sectionId == 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
