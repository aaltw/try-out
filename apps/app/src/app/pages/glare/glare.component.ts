import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="flex h-screen items-center justify-center space-x-8 bg-gray-700"
    >
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

      <div
        class="group relative h-36 w-36 transform-gpu overflow-hidden bg-gray-800 duration-500"
      >
        <div
          class="flex h-full w-full transform-gpu items-center justify-center after:absolute after:inset-0 after:h-48 after:origin-right after:-translate-x-full after:rotate-[35deg] after:bg-gradient-to-r after:from-transparent after:via-white after:opacity-50 after:duration-200 group-hover:scale-105 group-hover:after:translate-x-full"
        >
          <img src="/assets/logo.svg" class="h-auto w-14" />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlareComponent {}
