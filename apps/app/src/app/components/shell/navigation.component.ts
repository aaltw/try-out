import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'try-out-spy-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
