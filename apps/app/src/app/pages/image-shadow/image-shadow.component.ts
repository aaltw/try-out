import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <div class="max-w-5xl mx-auto mt-16 flex flex-row space-x-16">
      <div class="w-full relative">
        <div class="absolute inset-0 opacity-90">
          <img
            class="object-cover h-48 rounded aspect-video scale-105 blur-md"
            src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
          />
        </div>
        <img
          class="object-cover h-48 rounded aspect-video relative"
          src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
        />
      </div>
      <div class="w-full relative group">
        <div class="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
          <img
            class="object-cover h-48 rounded aspect-video blur-md"
            src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
          />
        </div>
        <img
          class="object-cover h-48 rounded aspect-video relative"
          src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
        />
      </div>
      <div class="w-full relative group">
        <div class="absolute inset-0">
          <img
            class="object-cover h-48 transition-all rounded aspect-video scale-95 group-hover:scale-100 blur-md"
            src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
          />
        </div>
        <img
          class="object-cover h-48 rounded aspect-video relative"
          src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
        />
      </div>

      <div class="w-full relative group">
        <div class="absolute mx-auto w-[80%] inset-0 translate-y-2">
          <img
            class="object-cover h-48 transition-all rounded aspect-video blur-md"
            src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
          />
        </div>
        <img
          class="object-cover h-48 rounded aspect-video relative"
          src="assets/erwan-hesry-bvgsz17kdxc-unsplash.webp"
        />
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageShadowComponent {}
