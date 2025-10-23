import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppMode {
  private platform = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  private readonly STORAGE_KEY = 'isDark';

  isDark = signal<boolean>(false);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (!isPlatformBrowser(this.platform)) return;
    const savedMode = localStorage.getItem(this.STORAGE_KEY);
    if (savedMode !== null) {
      this.isDark.set(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(prefersDark);
      this.saveCurrentMode();
    }
    this.applyTheme(this.isDark());
  }
  toggle(): void {
    this.isDark.update((value) => !value);
    this.applyTheme(this.isDark());
    if (!isPlatformBrowser(this.platform)) return;
    this.saveCurrentMode();
  }

  saveCurrentMode() {
    if (isPlatformBrowser(this.platform)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.isDark()));
    }
  }

  private applyTheme(isDark: boolean): void {
    if (!isPlatformBrowser(this.platform)) return;
    const html = this.document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
