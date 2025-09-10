<template>
    <div class="button">
        {{ props.title }}
        <NuxtLink v-if="props.path" :to="props.path"></NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
    const props = defineProps(["title", "path"])
</script>

<style scoped lang="scss">
    .button {
        background-color: #c23564; 
        border: none; 
        color: white; 
        padding: 16px 32px; 
        text-align: center;
        text-decoration: none; 
        display: inline-block; 
        font-size: 16px; 
        margin: 8px; 
        cursor: pointer; 
        border-radius: 32px; 
        transition: background-color 0.3s;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .button:hover {
        color: #c23564;
        background-color: rgba(194, 53, 100, 0.05);
        box-shadow: 0 4px 10px #c23564;
    }
</style>