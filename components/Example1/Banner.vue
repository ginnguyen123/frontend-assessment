<template>
    <div class="example-1-banner dc-flex">
        <img id="img-banner" src="https://placehold.co/1920x650"></img>
        <div class="example-1-banner__text dc-flex">
            <h1 class="color-white">Hello Developer!</h1>
            <span class="text color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

const handleResize = () => {
    const windowWidth = window.innerWidth;
    const img:any = document.getElementById('img-banner');

    if(windowWidth <= 600){
        img.src = 'https://placehold.co/600x600'
    }else {
        img.src = 'https://placehold.co/1920x650'
    }
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

</script>

<style lang="scss" scoped>
@use '/assets/scss/variables.scss' as *;

.example-1-banner{
    width: 100%;
    position: relative !important;
    overflow: hidden;
    max-height: 400px;
    min-height: 150px;
    img{
        width: 100%;
        max-height: 400px;
        min-height: 150px;
        filter: brightness(0.7);
        object-fit: cover;
    }
}

.example-1-banner__text{
    width: 100%;
    text-align: center;
    position: absolute !important;
    z-index: 1;
}


@media screen and (max-width: $screen-mobile){
    .example-1-banner{
        margin-bottom: 32px;
    }

    .example-1-banner > img {
        max-height: 400px;
    }

    .example-1-banner__text{
        h1{
            margin: 8px;
        }
    }
}

</style>
