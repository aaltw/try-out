import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'try-out-spy-navigation-item',
  styles: [
    `
      .link-active {
        @apply bg-white bg-slate-200/0 text-slate-900/90 hover:bg-slate-200/70 hover:text-slate-900/70;
        @apply dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-white/100;
        @apply after:absolute after:left-0 after:h-6 after:w-1 after:rounded-r-md after:bg-pink-600 after:transition-[height] after:duration-200 after:hover:h-full;
      }

      .link-inactive {
        @apply bg-white bg-slate-200/0 text-slate-900/90 hover:bg-slate-200/70 hover:text-slate-900/70;
        @apply dark:text-white/90 dark:hover:bg-white/5 dark:hover:text-white/100;
      }

      .icon-active {
        @apply text-pink-700;
      }
    `,
  ],
  template: `
    <a
      [routerLink]="link"
      routerLinkActive
      #rla="routerLinkActive"
      [ngClass]="rla.isActive ? 'link-active' : 'link-inactive'"
      class="relative flex w-full items-center space-x-3 rounded-r-full  px-2 py-2 text-sm font-normal transition-all duration-300  "
    >
      <div
        class="flex w-5 items-center"
        [ngClass]="rla.isActive ? 'icon-active' : 'icon-inactive'"
      >
        <ng-content select="[slot=icon]"></ng-content>
      </div>
      <div class="" *ngIf="label">{{ label }}</div>
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
