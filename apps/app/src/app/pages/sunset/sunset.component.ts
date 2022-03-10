import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="mx-auto mt-24 flex  max-w-3xl flex-row items-center justify-center space-x-6 p-12"
    >
      <div class="grid grid-cols-2 gap-4">
        <div
          class="group relative flex h-80 w-80 items-center justify-center p-4"
        >
          <div class="relative">
            <div
              class="absolute top-16 -left-12 h-20  w-40 rounded-full rounded-t-none bg-orange-800/25 px-4 blur-md"
            ></div>
            <div
              class="h-24 w-24 -translate-y-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-md shadow-orange-800 transition-transform group-hover:translate-y-0"
            ></div>
            <div
              class="absolute top-12 -left-8 h-20 w-40 rounded-full rounded-t-none border-2 border-white/30 bg-white/30 px-4 backdrop-blur-md backdrop-filter"
            ></div>
          </div>
        </div>
        <div
          class="group relative flex h-80 w-80 items-center justify-center p-4"
        >
          <div class="relative">
            <div
              class="absolute top-1/2 left-1/2 h-36 w-24 -translate-y-1/2 translate-x-[calc(-50%-2.25rem)] -rotate-45 rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem]  rounded-br-[3rem_2rem] bg-gradient-to-tl from-green-600/25 to-green-800/25 px-4 blur-md transition-transform"
            ></div>

            <div
              class="absolute top-1/2 left-1/2 h-36 w-24 -translate-y-1/2 translate-x-[calc(-50%-1.25rem)] -rotate-45 rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem] bg-gradient-to-tl from-green-600 to-green-800 shadow-md shadow-green-800/75 transition-transform"
            ></div>

            <div
              class="absolute top-1/2 left-1/2 h-36 w-24 -translate-y-1/2  translate-x-[calc(-50%+1.25rem)] rotate-45 rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem] border-white/30 bg-white/30 shadow-md shadow-green-800/75 backdrop-blur-md backdrop-filter transition-transform"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunsetComponent {}
