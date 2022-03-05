import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { neonIcons } from '../../svg/neon';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: 'neon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeonComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NeonComponent }]),

    SvgIconsModule.forChild(neonIcons),
  ],
  declarations: [NeonComponent],
})
export class NeonComponentModule {}
