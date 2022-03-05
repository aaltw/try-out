import { Component, Input } from '@angular/core';

@Component({
  selector: 'try-out-spy-content-header',
  template: `
    <div class="bg-white/30 py-4 px-4 backdrop-blur-sm backdrop-filter">
      <h1 class="text-2xl font-semibold text-gray-900">
        <ng-content></ng-content>
      </h1>
    </div>
  `,
})
export class ContentHeaderComponent {
  #disabledValue = false;

  @Input()
  get disabled(): boolean {
    return this.#disabledValue;
  }
  set disabled(value: boolean) {
    this.#disabledValue = value === undefined || value;
  }
}
