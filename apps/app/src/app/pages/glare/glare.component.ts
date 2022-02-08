import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="flex h-screen items-center justify-center bg-gray-700">
      <div
        class="group h-36 w-36 overflow-hidden bg-gray-800 duration-500 hover:scale-105"
      >
        <div
          class="relative inset-0 h-36 w-36 -translate-x-full duration-300 group-hover:translate-x-full"
        >
          <div class="absolute top-0 right-8 h-full w-1 bg-white/70"></div>
          <div class="absolute top-0 right-5 h-full w-3 bg-white/50"></div>
          <div class="absolute top-0 right-0 h-full w-6 bg-white/20"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlareComponent {}
