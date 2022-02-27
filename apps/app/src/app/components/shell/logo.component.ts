import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'try-out-spy-logo',
  template: `
    <svg
      class="h-6 text-pink-600"
      viewBox="0 0 121 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="a"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="121"
        height="44"
      >
        <path fill="currentColor" d="M0 0h121v44H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M30 40h22M3-4l29 49M75-3 46 46M71 40h22M44-5l29 49M118-5 89 44M51 4H29M3 48 32-1"
          stroke="currentColor"
          stroke-width="9"
          stroke-linejoin="round"
        />
        <mask
          id="b"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="43"
          y="-3"
          width="37"
          height="55"
        >
          <path
            d="m47 0 29 49"
            stroke="currentColor"
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
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="-4"
          y="-12"
          width="37"
          height="55"
        >
          <path
            d="m0-9 29 49"
            stroke="currentColor"
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
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
