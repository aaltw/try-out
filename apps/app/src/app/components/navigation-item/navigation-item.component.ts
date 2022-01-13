import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-navigation-item',
  template: `
    <a
      [routerLink]="link"
      routerLinkActive="bg-slate-200 text-pink-600 hover:text-pink-700 hover:bg-slate-200 dark:bg-slate-700 dark:hover:text-slate-50 dark:bg-slate-700 dark:hover:text-slate-200 after:shadow-[0_1.5rem_0_0_rgba(51,65,85,1)] before:shadow-[0_-1.5rem_0_0_rgba(51,65,85,1)]"
      class="flex items-center w-full px-3 py-3 space-x-3 text-sm font-medium transition-colors rounded-md text-slate-600 hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:text-slate-400 group relative after:absolute after:right-0 after:-top-12 after:w-6 after:h-12 after:bg-transparent after:rounded-br-[1.5rem] before:absolute before:right-0 before:-bottom-12 before:w-6 before:h-12 before:bg-transparent before:rounded-tr-[1.5rem]"
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
