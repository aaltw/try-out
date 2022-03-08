import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
    >
      <button
        class="m-4 border border-gray-500/50 bg-gray-500/5 px-8 py-4 shadow-md"
      >
        shadow-md
      </button>
      <button
        class="shadow-smooth m-4 border border-gray-500/50 bg-gray-500/5 px-8 py-4"
      >
        shadow-smooth
      </button>
      <button
        class="shadow-button-sm m-4 border border-gray-500/50 bg-gray-500/5 px-8 py-4"
      >
        shadow-button-sm
      </button>
      <button
        class="shadow-button-md m-4 border border-gray-500/50 bg-gray-500/5 px-8 py-4"
      >
        shadow-button-md
      </button>
      <button
        class="shadow-button-lg m-4 border border-gray-500/50 bg-gray-500/5 px-8 py-4"
      >
        shadow-button-lg
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowComponent {}
