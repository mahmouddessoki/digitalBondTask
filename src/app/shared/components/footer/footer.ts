import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SocialIcons } from "../social-icons/social-icons";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (sectionId == 'hero') {
      window.scrollTo({ top: 0 });
      return;
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
