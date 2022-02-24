import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'try-out-spy-navigation-item',
  styles: [
    `
      .link-active {
        @apply text-white/50 hover:bg-slate-200 hover:text-white/5 dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/25 dark:hover:text-white/100;
      }

      .link-inactive {
        @apply text-white/50 hover:bg-slate-200 hover:text-white/5 dark:bg-white/0 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white/100;
      }
    `,
  ],
  template: `
    <a
      [routerLink]="link"
      routerLinkActive
      #rla="routerLinkActive"
      [ngClass]="rla.isActive ? 'link-active' : 'link-inactive'"
      class="flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm font-medium transition-colors"
    >
      <span class="h-6 w-6 "
        ><ng-content select="[slot=icon]"></ng-content
      ></span>
      <span *ngIf="label">{{ label }}</span>
      <ng-content select="[slot=content]"></ng-content>
    </a>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NavigationItemComponent {
  @Input()
  link = '';

  @Input()
  label = '';
}

//  dark:bg-white/90 dark:text-white/90 dark:hover:bg-white/20 dark:hover:text-white/60
/**
 *   <a
    routerLink="/sunset"
    routerLinkActive="bg-slate-200 text-pink-600 hover:text-pink-700 hover:bg-slate-200 dark:bg-slate-700 dark:hover:text-slate-50 dark:bg-slate-700 dark:hover:text-slate-200"
    class="group flex w-full items-center space-x-3 rounded-md px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white/60"
  >
 */
