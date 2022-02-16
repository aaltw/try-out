import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { appDownloadIcon } from '@app/svg/download';
import { appPhotographIcon } from '@app/svg/photograph';
import { appSunIcon } from '@app/svg/sun';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { AppComponent } from './app.component';
import { CollapsibleNavigationComponent } from './components/collapsible-navigation.component';
import { ContentHeaderComponent } from './components/content-header.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { NavigationComponent } from './components/navigation.component';
import { BackgroundGlowComponent } from './pages/background-glow/background-glow.component';
import { ButtonGlowComponent } from './pages/button-glow/button-glow.component';
import { ImageReflectionComponent } from './pages/image-reflection/image-reflection.component';
import { NeonComponent } from './pages/neon/neon.component';
import { ShadowComponent } from './pages/shadow/shadow.component';
import { SkeletonComponent } from './pages/skeleton/skeleton.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ImageShadowComponent } from './pages/image-shadow/image-shadow.component';
import { SunsetComponent } from './pages/sunset/sunset.component';
import { GlareComponent } from './pages/glare/glare.component';
import { CircleComponent } from './pages/circle/circle.component';
import { BrowserComponent } from './pages/browser/browser.component';
import { GradientHoverComponent } from './pages/gradient-hover/gradient-hover.component';
import { NeumorphicComponent } from './pages/neumorphic/neumorphic.component';

const PAGES = [
  BackgroundGlowComponent,
  BrowserComponent,
  ButtonGlowComponent,
  CircleComponent,
  CollapsibleNavigationComponent,
  GlareComponent,
  GradientHoverComponent,
  ImageReflectionComponent,
  ImageShadowComponent,
  NavigationComponent,
  NavigationItemComponent,
  NeonComponent,
  ShadowComponent,
  SkeletonComponent,
  SunsetComponent,
  TodoComponent,
  NeumorphicComponent,
];

const COMPONENTS = [ContentHeaderComponent];

const appRoutes: Routes = [
  {
    path: 'neon',
    component: NeonComponent,
  },
  {
    path: 'skeleton',
    component: SkeletonComponent,
  },
  {
    path: 'shadow',
    component: ShadowComponent,
  },
  {
    path: 'button-glow',
    component: ButtonGlowComponent,
  },
  {
    path: 'background-glow',
    component: BackgroundGlowComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'reflection',
    component: ImageReflectionComponent,
  },
  {
    path: 'image-shadow',
    component: ImageShadowComponent,
  },
  {
    path: 'sunset',
    component: SunsetComponent,
  },
  {
    path: 'glare',
    component: GlareComponent,
  },
  {
    path: 'circle',
    component: CircleComponent,
  },
  {
    path: 'browser',
    component: BrowserComponent,
  },
  {
    path: 'gradient-hover',
    component: GradientHoverComponent,
  },
  {
    path: 'neumorphic',
    component: NeumorphicComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
];

@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SvgIconsModule.forRoot({
      icons: [appDownloadIcon, appPhotographIcon, appSunIcon],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
