import { computed, inject } from "@angular/core"
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { PostsService } from "../../services/posts.service"
import { map, pipe, switchMap } from "rxjs"
import { Posts } from "../../services/posts.interface"

export interface CounterStateFromSignals {
    count: number
}

const initialSignalCounterState: CounterStateFromSignals = {
    count: 0
}

/**
 * Creating Counter Signal Store
 * By: Karunakar,
 * Date: 24th June 2024
*/

export const CounterStoreSignal = signalStore(
    {providedIn: 'root'},
    withState(initialSignalCounterState),
    withComputed(({count}) => ({
        doubleCount: computed(() => count() * 2)
    })),
    withMethods(({count, ...store}) => ({
        increment() {
            patchState(store, {count: count() + 1})
        },
        decrement() {
            patchState(store, {count: count() - 1})
        },
        reset() {
            patchState(store, {count: 0})
        }
    })),
)