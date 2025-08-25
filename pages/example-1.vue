<template>
    <div class="example-1-container">
        <Banner></Banner>
        <Card></Card>
    </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Example1/Banner.vue';
import Card from '~/components/Example1/Card.vue';

</script>

<style scoped lang="scss">
@use '/assets/scss/variables.scss' as *;

.example-1{
    width: 100%;
    max-width: $screen-desktop;
}

</style>
