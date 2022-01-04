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
    <div class="flex flex-col h-screen relative">
      <div class="fixed w-full z-10 border-b-slate-200/50 border-b">
        <try-out-spy-content-header>TodoComponent</try-out-spy-content-header>
      </div>

      <div class="flex-1 overflow-auto pt-16">
        <ul class="p-4">
          <li
            class="font-bold uppercase text-sm py-4 px-6 pl-0 text-slate-700 dark:text-slate-400 "
          >
            Todo
          </li>
          <li
            class="backdrop-blur-md dark:bg-slate-700/30 dark:text-slate-200 transition rounded-lg py-4 px-6 mt-4 shadow-slate-800 hover:shadow-slate-600 shadow-md"
          >
            item NEW!
          </li>

          <li
            class="backdrop-blur-md dark:bg-slate-700 dark:text-slate-200 dark:bg-opacity-30 transition rounded-lg py-4 px-6 mt-4 dark:hover:bg-opacity-[.25] flex justify-between"
            [ngClass]="{
              'line-through decoration-pink-500 opacity-40 pointer-events-none':
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
            class="font-bold uppercase text-sm py-4 px-6 pl-0 mt-4 text-slate-700 dark:text-slate-400"
          >
            Visit
          </li>
          <li
            class="decoration- backdrop-blur-md dark:bg-slate-700 dark:text-slate-200 dark:bg-opacity-30 transition rounded-lg py-4 px-6 dark:hover:bg-opacity-[.25] mt-4"
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
