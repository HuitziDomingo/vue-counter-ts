<script setup lang="ts">

import { useCounterStore } from '../stores/counter.store'

const counter = useCounterStore()


</script>

<template>
    <h1>
        Counter View: {{ counter.counter }}!!!!!!
    </h1>

    <button @click="counter.incrementValue(5)">+5</button>
    <button @click="counter.incrementValue(3)">+3</button>
    <button @click="counter.incrementValue(1)">+1</button>
</template>
