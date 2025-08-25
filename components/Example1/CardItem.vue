<template>
    <div class="card dc-flex shadow">
        <img :src="props.data.image"></img>
        <div class="card__text dc-flex">
            <p class="text">{{ props.data.content }}</p>
        </div>
        <Button title="READ MORE"></Button>
    </div>
</template>

<script lang="ts" setup>
import Button from './../Button.vue'
    const props = defineProps(["data"])
    const onReadMore = () => {
        console.log('onReadMore');
    }
</script>

<style scoped lang="scss">
@use '/assets/scss/variables.scss' as *;
    .card{
        justify-content: flex-start;
        box-sizing: border-box;
        width: 80%;
        padding: 16px;
        border-radius: 8px;
        gap: 16px;
        height: 500px;
    }

    .card img{
        border-radius: 16px;
        width: 100%;
        max-height: 250px;
        max-width: 300px;
    }

    .card__read-more{
        border: 3px solid #000;
        border-radius: 32px;
        padding: 8px;
        span {
            font-size: 12px;
            text-align: center;
            font-weight: 900;
            color: #000;
        }
    }

    .card__read-more:hover{
        cursor: pointer;
        border: 2px solid aqua;
        box-shadow: 0 4px 10px rgb(155, 241, 241);
        span {
            color: aqua;
        }
    }

    .card__text {
        height: 60%;
        justify-content: flex-start;
        overflow: hidden;             
        text-overflow: ellipsis;     
    }

    .card__text p{
        text-align: center;
        margin-top: 0;
        font-size: 16px;
    }
</style>