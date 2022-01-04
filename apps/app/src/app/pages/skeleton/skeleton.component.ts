import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <try-out-spy-content-header>Skeleton</try-out-spy-content-header>

    <div class="p-8">
      <div
        class="bg-slate-100 mx-auto border shadow-md border-gray-100/50 rounded-lg"
      >
        <div class="flex flex-col p-8 space-y-10">
          <div class="space-y-2">
            <div class="w-3/4 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div class="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
            <div class="w-5/6 h-4 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div
        class="bg-zinc-100 mx-auto border shadow-md border-gray-100/50 rounded-lg"
      >
        <div class="flex flex-col p-8 space-y-10">
          <div class="space-y-2">
            <div class="w-3/4 h-4 bg-zinc-300 rounded animate-pulse"></div>
            <div class="w-full h-4 bg-zinc-300 rounded animate-pulse"></div>
            <div class="w-5/6 h-4 bg-zinc-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div
        class="bg-neutral-100 mx-auto border shadow-md border-gray-100/50 rounded-lg"
      >
        <div class="flex flex-col p-8 space-y-10">
          <div class="space-y-2">
            <div class="w-3/4 h-4 bg-neutral-200 rounded animate-pulse"></div>
            <div class="w-full h-4 bg-neutral-200 rounded animate-pulse"></div>
            <div class="w-5/6 h-4 bg-neutral-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div
        class="bg-neutral-100 mx-auto border shadow-md border-gray-100/50 rounded-lg"
      >
        <div class="flex">
          <div class="pl-8 py-8">
          <div
                  class="w-16 h-16 bg-neutral-200 rounded-full animate-pulse"
                ></div>
          </div>
          <div class="w-full">
            <div class="flex flex-col p-8 space-y-10">
              <div class="space-y-2">
                <div
                  class="w-3/4 h-4 bg-neutral-200 rounded animate-pulse"
                ></div>
                <div
                  class="w-full h-4 bg-neutral-200 rounded animate-pulse"
                ></div>
                <div
                  class="w-5/6 h-4 bg-neutral-200 rounded animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {}
