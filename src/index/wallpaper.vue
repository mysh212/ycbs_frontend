<template>
    <div class = 'place_holder_two'>
        <logo />
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

import logo from '@/index/animates/logo.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        logo
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
    }
}
</script>

<style scoped>
.place_holder {
    position: relative;
    height: 200vh;
    width: 100vw;
}
.place_holder_two {
    position: relative;
    height: 400vh;
    width: 100vw;
}
</style>