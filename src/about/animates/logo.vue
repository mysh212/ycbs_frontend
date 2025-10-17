<template>
    <v-card class = 'bs' id = background align = center justify = middle min-height="100vh">
        <template #image>
            <v-img src = 'Logo/logo.png' id = logo max-height = 100vh max-width = '100vw' />
        </template>
    </v-card>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

export default {   
    name: 'legs',
    data() {
        return {
            links: [
                {name: '關於我們', icon: 'people-group', href: 'about'},
                {name: '歷年活動', icon: 'timeline', href: 'old'},
                {name: '現在報名', icon: 'bolt', href: 'register'}
            ]
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
        animate('#background', {
            autoplay: onScroll({
                enter: `center bottom-=${n * 0.25}`,
                leave: `top-=${n * 25} top`,
                sync: true,
                // debug: true
                onUpdate: (e) => {
                    $('#background').css({
                        background: `linear-gradient(${((3420 - 20) * e.progress) + 20}deg, green, #AAAA00)`,
                    })
                }
            })
        })
        animate('#zero', {
            'backdrop-filter': 'blur(20px)',
            autoplay: onScroll({
                enter: `center bottom-=${n >> 2}`,
                leave: `top-=${n} top`,
                sync: true
            })
        })
        animate('#showcase', {
            x: '10rem',
            opacity: 0,
            reversed: true,
            autoplay: onScroll({
                enter: 'center center',
                leave: 'top center',
                sync: true,
                // debug: true
            })
        })
    },
    methods: {
    }
}
</script>

<style scoped>
.bs {
    position: sticky;
    height: 100vh;
    width: 100vw;
    top: 0;
    /* z-index: -1; */
    /* backdrop-filter: blur(10px); */
}
.ct {
    /* position: absolute; */
    top: 50%;
    width: 100vw;
    /* text-align: center; */
}
#legs {
    filter: blur(50px);
}
#background {
    z-index: -1;
    position: fixed;
    display: flex;
    background: linear-gradient(20deg, green, #AAAA00);
}
#zero {
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#cute {
    position: fixed;
    top: 40vh;
    left: 70vw;
    width: 100px;
    z-index: 1;
}
#showcase {
    height: 100vh;
}
</style>