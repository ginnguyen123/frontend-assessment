<template>
    <div class="home-container">
        <Button title="Example 1" path="/example-1"></Button>
        <Button title="Example 2" path="frontend-assessment/example-2"></Button>
    </div>
</template>

<script setup>
import Button from '~/components/Button.vue';
</script>

<style scoped lang="scss">
    .home-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
