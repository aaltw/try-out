import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="mx-auto mt-24 max-w-3xl bg-gray-800 p-12 flex justify-center flex-col items-center"
    >
      <div class="p-12 pb-24">
        <div class="relative group">
          <div
            class="absolute top-20 -left-12 rounded-full  rounded-t-none w-40 h-20 bg-orange-800/25 px-4 blur-md"
          ></div>
          <div
            class="rounded-full bg-gradient-to-br from-orange-500 to-orange-600 w-24 h-24 shadow-md shadow-orange-800 translate-y-8 group-hover:translate-y-0 transition-transform"
          ></div>

          <div
            class="absolute top-16 -left-8 rounded-full border-2 border-white/30 rounded-t-none w-40 h-20 bg-white/30 px-4 backdrop-filter backdrop-blur-md"
          ></div>
        </div>
      </div>

      <div class="w-96 h-96">
        <div class="relative">
          <div
            class="absolute top-16 left-[calc(50%-5rem)] w-24 h-36 bg-green-800/25 px-4 blur-md rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem] rotate-[-60deg]"
          ></div>

          <div
            class="absolute top-0 left-1/2 bg-gradient-to-tl from-green-600 to-green-800 w-24 h-36 shadow-md shadow-green-800/75 translate-y-8 group-hover:translate-y-0 transition-transform rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem] translate-x-[calc(-50%+2rem)] rotate-45"
          ></div>

          <div
            class="absolute top-0 left-1/2 2 border-white/30 bg-white/30  w-24 h-36 shadow-md shadow-green-800/75 backdrop-filter backdrop-blur-md translate-y-8 group-hover:translate-y-0 transition-transform rounded-tl-[3rem_7rem] rounded-tr-[3rem_7rem] rounded-bl-[3rem_2rem] rounded-br-[3rem_2rem] translate-x-[calc(-50%-1rem)] -rotate-45"
          ></div>

         </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunsetComponent {}
