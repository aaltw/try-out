import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="flex h-screen flex-col bg-green-400">
      <div class="">
        <!-- <try-out-spy-content-header>Neon</try-out-spy-content-header> -->
      </div>

      <div class="flex-1 overflow-auto">
        <div class="m-8 rounded-2xl bg-slate-800 px-24 py-32">
          <div
            class="drop-shadow-neon-purple mx-auto h-16 w-16 rounded-full bg-white"
          ></div>
        </div>

        <div
          class="m-8 flex items-center justify-center rounded-2xl bg-slate-800 px-24 py-32"
        >
          <svg
            class="h-48 w-48"
            viewBox="0 0 121 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glowie">
                <feGaussianBlur
                  result="coloredBlur"
                  stdDeviation="1"
                ></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>

            <mask
              id="a"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="121"
              height="44"
            >
              <path fill="#fff" d="M0 0h121v44H0z" />
            </mask>
            <g mask="url(#a)">
              <path
                style=" filter: url(#glowie);"
                d="M30 40h22M3-4l29 49M75-3 46 46M71 40h22M44-5l29 49M118-5 89 44M51 4H29M3 48 32-1"
                stroke="#fff"
                stroke-width="9"
                stroke-linejoin="round"
              />
              <mask
                id="b"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="43"
                y="-3"
                width="37"
                height="55"
              >
                <path
                  d="m47 0 29 49"
                  stroke="#fff"
                  stroke-width="9"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#b)">
                <path
                  d="m46 34 28-47"
                  stroke="#000"
                  stroke-opacity=".5"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </g>
              <mask
                id="c"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="-4"
                y="-12"
                width="37"
                height="55"
              >
                <path
                  d="m0-9 29 49"
                  stroke="#fff"
                  stroke-width="9"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#c)">
                <path
                  d="m-2 68 28-47"
                  stroke="#000"
                  stroke-opacity=".5"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>

        <div
          class="m-8 flex items-center justify-center rounded-2xl bg-slate-800 px-24 py-32"
        >
          <svg height="300" width="824">
            <g class="svgWrapper" transform="translate(1.000000, 1.000000)">
              <defs>
                <filter id="glowie">
                  <feGaussianBlur
                    result="coloredBlur"
                    stdDeviation="4"
                  ></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="coloredBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M100,250 C100,100 400,100 400,250"
                style="fill-opacity: 0; stroke-width: 2; stroke: #96F706; filter: url(#glowie);"
                transform="translate(1.000000, 1.000000)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeonComponent {}
