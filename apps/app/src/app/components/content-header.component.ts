import { Component } from '@angular/core';

@Component({
  selector: 'try-out-spy-content-header',
  template: `
  <div class="py-4 bg-white/30 px-4 backdrop-filter backdrop-blur-sm">
    <h1 class="text-2xl font-semibold text-gray-900"><ng-content></ng-content></h1>
  </div>
  `,
})
export class ContentHeaderComponent {}
