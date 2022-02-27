import { Component } from '@angular/core';

export interface TodoTask {
  done: boolean;
  task: string;
  url?: string;
  date_created?: Date;
}
export interface ApiTodoTask {
  date_created: string;
  done: boolean;
  id: string;
  task: string;
  url: string;
}
@Component({
  template: `
    <div class="relative flex h-screen flex-col">
      <div class="fixed z-10 w-full border-b border-b-slate-200/50">
        <!-- <try-out-spy-content-header>TodoComponent</try-out-spy-content-header> -->
      </div>

      <div class="flex-1 overflow-auto pt-16">
        <ul class="p-4">
          <li
            class="py-4 px-6 pl-0 text-sm font-bold uppercase text-slate-700 dark:text-slate-400 "
          >
            Todo
          </li>
          <li
            class="mt-4 rounded-lg py-4 px-6 shadow-md shadow-slate-800 backdrop-blur-md transition hover:shadow-slate-600 dark:bg-slate-700/30 dark:text-slate-200"
          >
            item NEW!
          </li>

          <li
            class="mt-4 flex justify-between rounded-lg py-4 px-6 backdrop-blur-md transition dark:bg-slate-700 dark:bg-opacity-30 dark:text-slate-200 dark:hover:bg-opacity-[.25]"
            [ngClass]="{
              'pointer-events-none line-through decoration-pink-500 opacity-40':
                item.done
            }"
            *ngFor="let item of list"
          >
            {{ item.task }}
            <a
              *ngIf="item.url"
              class="{{ this.getDecoration(item.task) }} underline"
              href="{{ item.url }}"
              target="_blank"
              >{{ item.url }}</a
            >
          </li>

          <li
            class="mt-4 py-4 px-6 pl-0 text-sm font-bold uppercase text-slate-700 dark:text-slate-400"
          >
            Visit
          </li>
          <li
            class="decoration- mt-4 rounded-lg py-4 px-6 backdrop-blur-md transition dark:bg-slate-700 dark:bg-opacity-30 dark:text-slate-200 dark:hover:bg-opacity-[.25]"
            *ngFor="let item of sites"
            [innerHTML]="item"
          ></li>
        </ul>
      </div>
    </div>
  `,
})
export class TodoComponent {
  #decoration = [
    'decoration-green-500',
    'decoration-red-500',
    'decoration-orange-500',
    'decoration-yellow-500',
    'decoration-purple-500',
    'decoration-pink-500',
    'decoration-sky-500',
    'decoration-lime-500',
  ];

  #list: TodoTask[] = [];

  #sites = [
    `<a class="${
      this.#sampleDecoration
    } underline" href="https://dribbble.com/" target="_blank">https://dribbble.com/</a>`,
    `<a class="${
      this.#sampleDecoration
    } underline" href="https://www.awwwards.com/" target="_blank">https://www.awwwards.com/</a>`,
    `<a class="${
      this.#sampleDecoration
    } underline" href="https://abduzeedo.com/" target="_blank">https://abduzeedo.com/</a>`,
    `<a class="${
      this.#sampleDecoration
    } underline" href="https://hype4.academy/tools/glassmorphism-generator" target="_blank">https://hype4.academy/tools/glassmorphism-generator</a>`,
    `<a class="${
      this.#sampleDecoration
    } underline" href="https://www.behance.net/" target="_blank">https://www.behance.net/</a>`,
  ];

  get #sampleDecoration() {
    return this.#decoration[
      Math.floor(Math.random() * this.#decoration.length)
    ];
  }

  getDecoration(identifier: string): string {
    return this.#decoration[identifier.charCodeAt(0) % this.#decoration.length];
  }

  get list() {
    return this.#list.sort((a, b) =>
      a.done
        ? 1
        : b.done
        ? -1
        : !a.date_created || !b.date_created
        ? 0
        : a.date_created.getTime() - b.date_created.getTime()
    );
  }

  get sites() {
    return this.#sites;
  }

  constructor() {
    this.#fromApi();
  }

  async #fromApi(): Promise<void> {
    // Return a Promise with TodoTask[] using the token
    this.#list = await fetch('assets/todos.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response: { data: ApiTodoTask[] }) =>
        response.data.map((t) => ({
          done: t.done,
          task: t.task,
          url: t.url,
          date_created: new Date(t.date_created),
        }))
      );
  }
}
