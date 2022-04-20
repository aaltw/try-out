import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundGlowComponent } from './pages/background-glow/background-glow.component';
import { ButtonGlowComponent } from './pages/button-glow/button-glow.component';
import { ImageReflectionComponent } from './pages/image-reflection/image-reflection.component';
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
import { MultiplicationComponent } from './pages/multiplication/multiplication.component';
import {
  ShellComponent,
  ShellComponentModule,
} from './components/shell/shell.component';
import { LearnSvgComponent } from './pages/learn-svg/learn-svg.component';

const PAGES = [
  BackgroundGlowComponent,
  BrowserComponent,
  ButtonGlowComponent,
  CircleComponent,

  GlareComponent,
  GradientHoverComponent,
  ImageReflectionComponent,
  ImageShadowComponent,

  ShadowComponent,
  SkeletonComponent,
  SunsetComponent,
  TodoComponent,
  NeumorphicComponent,
  MultiplicationComponent,

  LearnSvgComponent,
];

const COMPONENTS: typeof BackgroundGlowComponent[] = [];

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'neon',
        loadChildren: () =>
          import('./pages/neon/neon.component').then(
            (m) => m.NeonComponentModule
          ),
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
        path: 'multiplication',
        component: MultiplicationComponent,
      },
      {
        path: 'learn-svg',
        component: LearnSvgComponent,
      },
      {
        path: 'bottom-navigation',
        loadChildren: () =>
          import('./pages/bottom-navigation/bottom-navigation.component').then(
            (m) => m.BottomNavigationComponentModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todo',
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  imports: [
    BrowserModule,
    ShellComponentModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
