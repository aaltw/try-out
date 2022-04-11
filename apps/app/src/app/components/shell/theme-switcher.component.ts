import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'try-out-spy-theme-switcher',
  templateUrl: 'theme-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  public checked = false;

  public localStorage = localStorage;

  constructor() {
    this.#updateBodyClass();
  }

  onTheme(theme: 'dark' | 'light' | 'system'): void {
    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = theme;
    }

    (
      document.getElementById(
        'theme-switcher-dropdown-checkbox'
      ) as HTMLInputElement
    ).checked = false;

    this.#updateBodyClass();
  }

  #updateBodyClass(): void {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
