import { afterEveryRender, Component, DOCUMENT, inject, PLATFORM_ID, signal } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
/**components */
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';
/*flowbite */
import { initFlowbite } from 'flowbite';
import { ThemeToggler } from './core/components/theme-toggler/theme-toggler';
import { AppMode } from './core/services/app-mode';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ThemeToggler],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
   documentLoaded = signal(false);
  protected darkMode = inject(AppMode);
  protected id = inject(PLATFORM_ID);
  private document = inject(DOCUMENT)

  constructor() {
    afterEveryRender(() => {
      initFlowbite();
    });

    if (this.document.readyState === 'complete') {
       setTimeout(() => {
         this.documentLoaded.set(true);
       }, 1000);
    }else {

      this.document.addEventListener('DOMContentLoaded' , ()=>{
        setTimeout(()=>{
          this.documentLoaded.set(true)
        },3000)
      });
    }


  }

}
