import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-collapsible-navigation',
  template: `
    <div class="pt-4 pb-4 border-t border-slate-700/60">
      <div
        class="flex justify-between items-center px-3 cursor-pointer text-slate-400 hover:text-slate-50"
        (click)="expanded = !expanded"
      >
        <span class="flex text-sm uppercase py-4">
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
        class="overflow-hidden opacity-50 duration-300 pointer-events-none -translate-y-2 max-h-0 transition-[opacity,transform]"
        [ngClass]="{
          'max-h-96 opacity-100 duration-150 !translate-y-0 pointer-events-auto':
            expanded
        }"
      >
        <div class="pt-4 space-y-4">
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
