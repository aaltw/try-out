import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-navigation-item',
  template: `
    <a
      [routerLink]="link"
      routerLinkActive="bg-slate-200 text-pink-600 hover:text-pink-700 hover:bg-slate-200 dark:bg-slate-700 dark:hover:text-slate-50 dark:bg-slate-700 dark:hover:text-slate-200"
      class="flex items-center w-full px-3 py-3 space-x-3 text-sm font-medium transition-colors rounded-md text-slate-600 hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:text-slate-400 group"
    >
      <span class="w-6 h-6"><ng-content select="[slot=icon]"></ng-content></span>
      <span>{{ label }}</span>
    </a>
  `,
})
export class NavigationItemComponent {
  @Input()
  link = "";

  @Input()
  label = "";
}
