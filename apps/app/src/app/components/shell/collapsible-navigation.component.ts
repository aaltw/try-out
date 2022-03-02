import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-collapsible-navigation',
  template: `
    <div class="pt-4">
      <div
        class="flex cursor-pointer items-center justify-between px-3 text-slate-600 text-slate-400/80 hover:text-slate-600/80 hover:text-slate-400"
        (click)="expanded = !expanded"
      >
        <span class="flex py-4 text-xs font-semibold uppercase">
          <ng-content select="[slot=start]"></ng-content>
        </span>
        <span
          class="h-5 w-5 origin-center transition-transform duration-200"
          [ngClass]="{ 'rotate--90': expanded, 'rotate-180': !expanded }"
        >
          <svg-icon key="chevron" size="lg"></svg-icon>
        </span>
      </div>

      <div
        class="pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-50 transition-[opacity,transform] duration-300 "
        [ngClass]="{
          'pointer-events-auto max-h-96 !translate-y-0 opacity-100 duration-150':
            expanded
        }"
      >
        <div class="flex flex-col space-y-1">
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
