import { HiAlert } from '../../.nuxt/components';

<script setup lang="ts">

const nuxt = useNuxtApp();

const route = useRoute();

const { id } = toRefs(route.params);

console.log(route.params.id);
console.log(nuxt);


</script>

<template>
    <div class="main mt-20">
        Event ID :{{ $route.params.id }}
        <HiAlert :name="id" message="Asalam Akeykum"/>
     
    </div>
</template>

<style lang="css">
    .main {
        margin: 15;
        padding: 10;
        box-sizing: border-box;
    }
</style>