import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div
      class="mx-auto flex w-full flex-1 flex-col overflow-y-auto rounded-sm pt-6 pb-6 shadow-inner"
    >
      <div class="group relative mx-auto my-16">
        <div
          class="absolute inset-0 transform-gpu rounded-xl opacity-50 transition-opacity duration-1000 group-hover:opacity-90 group-hover:duration-200"
        >
          <div class="animate-button-wiggle absolute -inset-3">
            <div
              class="absolute inset-0 rounded-xl bg-pink-700 bg-gradient-to-r from-pink-700 to-indigo-700 blur-sm"
            ></div>
            <div
              class="absolute inset-0 rounded-xl bg-pink-700 bg-gradient-to-r from-pink-700 to-indigo-700 blur-md"
            ></div>
            <div
              class="absolute inset-0 rounded-xl bg-pink-700 bg-gradient-to-r from-pink-700 to-indigo-700 blur-xl"
            ></div>
          </div>
        </div>

        <button
          class="relative flex items-center divide-x divide-gray-600 rounded-xl bg-black px-7 py-4 leading-none text-gray-200"
        >
          <span class="flex items-center space-x-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-pink-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span class="pr-6">Amazing</span>
          </span>
          <span
            class="flex items-center space-x-3 pl-6 text-indigo-700 transition-colors duration-1000 group-hover:text-indigo-500 group-hover:duration-200"
            ><span>Button</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGlowComponent {}
