<template>
    <div class="example-2 dc-flex">
        <div class="dc-flex example-2__tab-header shadow">
            <section 
                :class="[
                    'example-2__tab-header__item',
                    {'active': key === value.title}
                ]"
                @click="onChoiceTab(value.title)"
                v-for="value in data">
                {{ 
                    value.title
                }}
                
            </section>
        </div>
        <div class="example-2__tab-indicator"></div>
        <div class="example-2__tab-body">
            <div 
                :class="[
                    'example-2__tab-body__detail',
                    {'active': key === value.title}
                ]"
                v-for="value in data">
                <h1>{{ value.title }}</h1>
                <div v-html="value.content"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '~/data.json';

const key = ref()

const onChoiceTab = (title:string) => {
    if(title){
        key.value = title.trim()
    }
}

onMounted(() => {
    if(data && data.length > 0){
        key.value = data[0].title.trim()
    }
})

</script>

<style scoped lang="scss">
@use '/assets/scss/variables.scss' as *;

.home-container{
    width: 100%;
    max-width: $screen-desktop;
}

.example-2{
    margin: 16px;
    padding: 16px;

    justify-content: center;
}

.example-2 .example-2__tab-header{
    padding: 8px;
    position: relative;
    flex-direction: row !important;
    height: 50px;
    border-radius: 32px;
    border: 0.5px solid #d6cccc;
    box-sizing: border-box;
}

.example-2__tab-body__detail{
    display: none;
}

.example-2__tab-body__detail > h1{
    text-align: center;
    color: #c23564;
}

.example-2__tab-header__item{
    padding: 10px;
    border-radius: 24px;
    box-sizing: border-box;
    text-align: center;
    color: #c23564;
    opacity: 0.6;
    cursor: pointer;
    transition: all 0.5s ease;
}

.example-2__tab-header__item:hover {
  opacity: 1;
  background-color: rgba(194, 53, 100, 0.05);
  border-color: rgba(194, 53, 100, 0.1);
}

.example-2__tab-header__item.active {
    opacity: 1;
    font-weight: 600;
    background-color: rgba(194, 53, 100, 0.05);
}

.example-2__tab-body__detail.active {
    display: block;
}

</style>
