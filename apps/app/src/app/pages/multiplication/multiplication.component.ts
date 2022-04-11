import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  takeWhile,
  tap,
  timer,
} from 'rxjs';

@Component({
  templateUrl: './multiplication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplicationComponent {
  // BehaviorSubject, we want the last value emitted
  public a$ = new BehaviorSubject<number>(0);
  public b$ = new BehaviorSubject<number>(0);

  // ReplaySubject, late subscribers / | async get the same value
  public result$ = new ReplaySubject<boolean | null>(1);

  // Subject.. as soon as it emits, we want to show it
  public refreshSeconds$ = new Subject<number>();

  #answer = 0;
  #a = 0;
  #b = 0;

  #timerRunning = false;

  constructor() {
    this.#createMultiplication();
  }

  #createMultiplication(): void {
    this.#a = Math.round(Math.random() * (99 - 10 + 1) + 10);
    this.#b = Math.round(Math.random() * (99 - 10 + 1) + 10);
    this.#answer = this.#a * this.#b;
    this.a$.next(this.#a);
    this.b$.next(this.#b);
  }

  check(event: Event): void {
    if (this.#timerRunning) {
      return;
    }

    const correct = +(event.target as HTMLInputElement).value === this.#answer;
    this.result$.next(correct);

    if (!correct) {
      return;
    }

    let counter = 10;
    timer(0, 1000) //Initial delay 1 seconds and interval countdown also 1 second
      .pipe(
        tap(() => (this.#timerRunning = true)),

        // Run timer while counter > 0
        takeWhile(() => counter > 0),

        // Also, just run when timer is running
        takeWhile(() => this.#timerRunning),
        tap(() => counter--)
      )
      .subscribe({
        next: () => this.refreshSeconds$.next(counter),
        complete: () => {
          this.#createMultiplication();
          this.result$.next(null);
          (event.target as HTMLInputElement).value = '';
          (event.target as HTMLInputElement).focus();
          this.#timerRunning = false;
        },
      });
  }
}
