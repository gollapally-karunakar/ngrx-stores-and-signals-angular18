import { Component, Inject, computed, effect, inject, signal } from '@angular/core';
import { CounterStoreSignal } from '../store/counterSignal.store';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss'],
  // providers: [CounterStoreSignal]
})
export class SignalCounterComponent {

  // Variable declarations
  count = signal(0);
  double = computed(() => this.count() * 2);
  //Injecting Counter Signal Store
  counterStoreSignal = inject(CounterStoreSignal);

  // Constructor Function
  constructor() {
    effect(() => {
      console.log("Single Count: " + this.count());
    })
  }

  /**
   * Incrementing count number plus one,
   * By: Karunakar,
   * On: 24th June 2024
  */
  increment() {
    this.count.update(num => num + 1);
  }

  /**
   * Decrementing count number minus one,
   * By: Karunakar,
   * On: 24th June 2024
  */
  decrement() {
    this.count.update(num => num - 1);
  }

  /**
   * Resetting count number to Zero,
   * By: Karunakar,
   * On: 24th June 2024
  */
  reset() {
    this.count.set(0);
  }

}
