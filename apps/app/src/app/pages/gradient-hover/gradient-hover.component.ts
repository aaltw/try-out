import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: ` <p>gradient-hover works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradientHoverComponent {}
