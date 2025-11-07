<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <div>
        <event />
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

import logo from '@/event/animates/logo.vue';
import event from '@/event/animates/event.vue'

export default {   
    name: 'home_wallpaper',
    components: {
        logo,
        event
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