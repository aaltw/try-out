import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="flex flex-col flex-1 h-screen min-h-0">
      <try-out-spy-content-header>Browser</try-out-spy-content-header>
      <div class="pt-20 px-12">
        <!-- The "Browser" -->
        <div
          class="border-gray-700 border rounded-md overflow-hidden h-64 w-full mx-auto bg-slate-800 flex flex-col"
        >
          <div class="p-2 border-gray-700 border-b flex">
            <div class="rounded-full bg-gray-500 w-3 h-3"></div>
            <div class="rounded-full bg-gray-500 w-3 h-3 ml-1.5"></div>
            <div class="rounded-full bg-gray-500 w-3 h-3 ml-1.5"></div>
          </div>
          <div class="flex-1 bg-black/5 backdrop-blur-md p-4 overflow-auto flex">
            <div class="flex-1 text-justify text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowserComponent {}
