import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="grid grid-cols-1 gap-4 p-8 lg:grid-cols-2">
      <div class="w-full rounded-sm border border-zinc-200/60 bg-slate-200/50">
        <div class="flex flex-col space-y-10 p-8">
          <div class="space-y-2">
            <div class="h-4 w-3/4 animate-pulse rounded bg-slate-300"></div>
            <div class="h-4 w-full animate-pulse rounded bg-slate-300"></div>
            <div class="h-4 w-5/6 animate-pulse rounded bg-slate-300"></div>
          </div>
        </div>
      </div>

      <div class="w-full rounded-sm border border-zinc-500/10 bg-zinc-100">
        <div class="flex flex-col space-y-10 p-8">
          <div class="space-y-2">
            <div class="h-4 w-3/4 animate-pulse rounded bg-zinc-300"></div>
            <div class="h-4 w-full animate-pulse rounded bg-zinc-300"></div>
            <div class="h-4 w-5/6 animate-pulse rounded bg-zinc-300"></div>
          </div>
        </div>
      </div>

      <div
        class="w-full rounded-sm border border-neutral-200/50 bg-neutral-100"
      >
        <div class="flex flex-col space-y-10 p-8">
          <div class="space-y-2">
            <div class="h-4 w-3/4 animate-pulse rounded bg-neutral-200"></div>
            <div class="h-4 w-full animate-pulse rounded bg-neutral-200"></div>
            <div class="h-4 w-5/6 animate-pulse rounded bg-neutral-200"></div>
          </div>
        </div>
      </div>

      <div
        class="w-full rounded-lg border border-gray-100/50 bg-neutral-100 shadow-md"
      >
        <div class="flex">
          <div class="py-8 pl-8">
            <div
              class="h-16 w-16 animate-pulse rounded-full bg-neutral-200"
            ></div>
          </div>
          <div class="w-full">
            <div class="flex flex-col space-y-10 p-8">
              <div class="space-y-2">
                <div
                  class="h-4 w-3/4 animate-pulse rounded bg-neutral-200"
                ></div>
                <div
                  class="h-4 w-full animate-pulse rounded bg-neutral-200"
                ></div>
                <div
                  class="h-4 w-5/6 animate-pulse rounded bg-neutral-200"
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
