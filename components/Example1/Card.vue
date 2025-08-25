<template>
    <div class="card-container">
        <CardItem
            v-for="value in data"
            :data="value">
        </CardItem>
    </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue';

const data = ref([
    {
        image: 'https://placehold.co/400x300',
        content: 'Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.'
    },
    {
        image: 'https://placehold.co/400x300',
        content: 'Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi.'
    },
     {
        image: 'https://placehold.co/400x300',
        content: 'Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }
])

</script>

<style lang="scss" scoped>
@use '/assets/scss/variables.scss' as *;

.card-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    align-items: center;
    padding-top: 32px;
    margin: 0 5%;
    gap: 32px;
}

@media screen and (max-width: $screen-mobile){
    .card-container{
        flex-direction: column;
        margin: 0 16px;
        padding-top: 16px;
    }
}
</style>
