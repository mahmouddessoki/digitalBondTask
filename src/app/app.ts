import { afterEveryRender, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/**components */
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';
/*flowbite */
import { initFlowbite } from 'flowbite';
import { ThemeToggler } from './core/components/theme-toggler/theme-toggler';
import { AppMode } from './core/services/app-mode';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ThemeToggler],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('digitalBondApp');
  protected darkMode = inject(AppMode);
  protected id = inject(PLATFORM_ID);

  constructor() {
    afterEveryRender(() => {
      initFlowbite();
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.id)) {
      AOS.init({
        duration: 1000,
      });
    }
  }
}
