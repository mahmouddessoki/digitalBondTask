import { Component, computed, inject } from '@angular/core';
import { AppMode } from '../../services/app-mode';

@Component({
  selector: 'app-theme-toggler',
  imports: [],
  templateUrl: './theme-toggler.html',
  styleUrl: './theme-toggler.scss',
})
export class ThemeToggler {
  private darkModeService = inject(AppMode);
  isDark = computed(() => this.darkModeService.isDark());
  changeTheme() {
    this.darkModeService.toggle();
  }
}
