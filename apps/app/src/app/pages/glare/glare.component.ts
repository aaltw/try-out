import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="flex justify-center items-center bg-gray-700 h-screen">
      <div class="w-36 h-36 bg-gray-800 hover:scale-105 duration-500 overflow-hidden group">
        <div class="relative w-36 h-36 inset-0 duration-300 -translate-x-full group-hover:translate-x-full">
          <div class="absolute bg-white/70 w-1 h-full top-0 right-8"></div>
          <div class="absolute bg-white/50 w-3 h-full top-0 right-5"></div>
          <div class="absolute bg-white/20 w-6 h-full top-0 right-0"></div>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
