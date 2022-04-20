import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { neonIcons } from '../../svg/neon';
import { SvgIconsModule } from '@ngneat/svg-icon';

@Component({
  templateUrl: './bottom-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomNavigationComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BottomNavigationComponent }]),

    SvgIconsModule.forChild(neonIcons),
  ],
  declarations: [BottomNavigationComponent],
})
export class BottomNavigationComponentModule {}
