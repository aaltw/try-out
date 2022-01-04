import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <try-out-spy-content-header>Skeleton</try-out-spy-content-header>

    <div class="flex flex-row justify-center mb-8 p-4">
      <button
        class="px-8 py-4 m-4 border shadow-md bg-gray-500/5 border-gray-500/50"
      >
        shadow-md
      </button>
      <button
        class="px-8 py-4 m-4 border shadow-smooth bg-gray-500/5 border-gray-500/50"
      >
        shadow-smooth
      </button>
      <button
        class="px-8 py-4 m-4 border shadow-button-sm bg-gray-500/5 border-gray-500/50"
      >
        shadow-button-sm
      </button>
      <button
        class="px-8 py-4 m-4 border shadow-button-md bg-gray-500/5 border-gray-500/50"
      >
        shadow-button-md
      </button>
      <button
        class="px-8 py-4 m-4 border shadow-button-lg bg-gray-500/5 border-gray-500/50"
      >
        shadow-button-lg
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowComponent {}
