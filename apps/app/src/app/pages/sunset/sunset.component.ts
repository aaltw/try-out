import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="mx-auto mt-24 max-w-3xl  p-12 flex justify-center flex-row items-center space-x-6"
    >
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-gray-800 w-80 h-80 relative p-4 flex justify-center items-center group"
        >
          <div class="relative">
            <div
              class="absolute top-16 -left-12 rounded-full  rounded-t-none w-40 h-20 bg-orange-800/25 px-4 blur-md"
            ></div>
            <div
              class="rounded-full bg-gradient-to-br from-orange-500 to-orange-600 w-24 h-24 shadow-md shadow-orange-800 -translate-y-8 group-hover:translate-y-0 transition-transform"
            ></div>
            <div
              class="absolute top-12 -left-8 rounded-full border-2 border-white/30 rounded-t-none w-40 h-20 bg-white/30 px-4 backdrop-filter backdrop-blur-md"
            ></div>
          </div>
        </div>
        <div
          class="bg-gray-800 w-80 h-80 relative p-4 flex justify-center items-center group"
        >
          <div class="relative">
            <div
              class="absolute top-1/2 -translate-y-1/2 translate-x-[calc(-50%-2.25rem)] left-1/2 -rotate-45 bg-gradient-to-tl from-green-600/25 to-green-800/25 w-24 h-36  px-4 blur-md transition-transform rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem]"
            ></div>

            <div
              class="absolute top-1/2 -translate-y-1/2 translate-x-[calc(-50%-1.25rem)] left-1/2 -rotate-45 bg-gradient-to-tl from-green-600 to-green-800 w-24 h-36 shadow-md shadow-green-800/75 transition-transform rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem]"
            ></div>

            <div
              class="absolute top-1/2 -translate-y-1/2 translate-x-[calc(-50%+1.25rem)] left-1/2 rotate-45  border-white/30 bg-white/30 w-24 h-36 shadow-md shadow-green-800/75 backdrop-filter backdrop-blur-md transition-transform rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunsetComponent {}
