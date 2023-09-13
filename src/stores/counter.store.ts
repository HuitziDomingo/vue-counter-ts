import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            counter: 0,
            numberOfChanges: 0,
        }
    },
    actions: {
        incrementValue(value: number) {
            this.counter += value
            this.numberOfChanges += 1
        }
    }

})