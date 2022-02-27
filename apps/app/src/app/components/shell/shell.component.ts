import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ContentHeaderComponent } from './content-header.component';
import { CollapsibleNavigationComponent } from './collapsible-navigation.component';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { navigationIcons } from '../../svg/navigation';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
  templateUrl: './shell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ShellComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule.forRoot({
      icons: navigationIcons,
    }),
  ],
  declarations: [
    NavigationComponent,
    NavigationItemComponent,
    ContentHeaderComponent,
    CollapsibleNavigationComponent,
    ShellComponent,
  ],
  exports: [ShellComponent],
})
export class ShellComponentModule {}
