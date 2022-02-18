import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-collapsible-navigation',
  template: `
    <div class="border-t border-white/5  pt-4 pb-4">
      <div
        class="flex cursor-pointer items-center justify-between px-3 text-slate-400 hover:text-slate-50"
        (click)="expanded = !expanded"
      >
        <span class="flex py-4 text-sm uppercase">
          <ng-content select="[slot=start]"></ng-content>
        </span>
        <span
          class="transition"
          [ngClass]="{ 'rotate-90': expanded, 'rotate-180': !expanded }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </span>
      </div>

      <div
        class="pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-50 transition-[opacity,transform] duration-300 "
        [ngClass]="{
          'pointer-events-auto max-h-96 !translate-y-0 opacity-100 duration-150':
            expanded
        }"
      >
        <div class="flex flex-col space-y-2 pt-4">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class CollapsibleNavigationComponent {
  @Input()
  expanded = true;
}
