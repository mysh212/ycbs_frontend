<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <countdown />
    <!-- <div class = 'place_holder'>
    </div> -->
    
    <div class = 'place_holder'>
        <core />
    </div>
    <div class = 'place_holder'>
        <showcase />
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

import logo from '@/index/animates/logo.vue';
import countdown from '@/index/animates/countdown.vue';
import showcase from '@/index/animates/showcase.vue';
import core from '@/index/animates/core.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        logo,
        countdown,
        showcase,
        core
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