<script setup lang="ts">
import { useCounterStore } from '../stores/counter.store'

const counter = useCounterStore()


</script>



<template>
    <h1>
        Home View {{ counter.counter}}
    </h1>
    <h3>
        Numero de Cambios {{ counter.numberOfChanges }}
    </h3>
</template>