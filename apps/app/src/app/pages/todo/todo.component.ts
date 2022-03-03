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
  templateUrl: 'todo.component.html',
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
    } underline" href="https://www.uihut.com/web-designs" target="_blank">https://www.uihut.com/web-designs</a>`,
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
