import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="flex h-screen min-h-0 flex-1 flex-col">
      <!-- <try-out-spy-content-header>Browser</try-out-spy-content-header> -->
      <div class="px-12 pt-20">
        <!-- The "Browser" -->
        <div
          class="mx-auto flex h-64 w-full flex-col overflow-hidden rounded-md border border-gray-700 bg-slate-800"
        >
          <div class="flex border-b border-gray-700 p-2">
            <div class="h-3 w-3 rounded-full bg-gray-500"></div>
            <div class="ml-1.5 h-3 w-3 rounded-full bg-gray-500"></div>
            <div class="ml-1.5 h-3 w-3 rounded-full bg-gray-500"></div>
          </div>
          <div
            class="flex flex-1 overflow-auto bg-black/5 p-4 backdrop-blur-md"
          >
            <div class="flex-1 text-justify text-sm text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowserComponent {}
