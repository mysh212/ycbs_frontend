<template>
    <div class = bs>
        <v-card id = two color = transparent>
            <v-row justify = center class = align-content-center id = showcase>
                <template v-for = 'i in links' :key = i>
                    <v-col cols = 12 md = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <a :href = '`${i.href}`'>
                                    <v-card
                                        class = 'ma-3 text-center align-content-center'
                                        v-bind = props
                                        v-ripple
                                        
                                        :style = '$vuetify.display.mdAndUp ? `height: 50vh` : `height: 30vh`'
                                        :variant = '!isHovering ? `tonal` : undefined'
                                        :color = 'isHovering ? `primary` : undefined'
                                    >
                                        <template #title>
                                            <v-icon> fa-solid fa-{{ i.icon }} </v-icon>
                                            <br>
                                            <b> {{ i.name }} </b>
                                        </template>
                                    </v-card>
                                </a>
                            </template>
                        </v-hover>
                    </v-col>
                </template>
            </v-row>
        </v-card>
    </div>
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
                {name: '現在報名', icon: 'bolt', href: 'https://forms.gle/4gZzUWVFvyVikF9k9'}
            ]
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
        // animate('#showcase', {
        //     x: '10rem',
        //     opacity: 0,
        //     reversed: true,
        //     autoplay: onScroll({
        //         enter: 'center center',
        //         leave: 'top center',
        //         sync: true,
        //         debug: true
        //     })
        // })
        animate('#showcase', {
            x: '10rem',
            opacity: 0,
            reversed: true,
            autoplay: onScroll({
                enter: 'bottom top',
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
    background: linear-gradient(20deg, #00FFFF, purple);
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
#two {
    backdrop-filter: blur(40px);
}
#showcase {
    height: 100vh;
}
</style>