<template>
    <div class = bs>
        <v-row justify = center align = center style = 'height: 100vh'>
            <v-col cols = 12 md = 8>
                <v-card variant = text class = 'text-center' color = white id = one>
                    <template #title>
                        <b class = 'text-black' style = 'font-size: 30px'> YCBS 早鳥優惠 報名倒數 </b>
                    </template>
                    <v-row>
                        <v-col cols = 6 md = 3><v-card class = text-center variant = tonal color = black :title = countdown.days text = 天 /></v-col>
                        <v-col cols = 6 md = 3><v-card class = text-center variant = tonal color = black :title = countdown.hours text = 時 /></v-col>
                        <v-col cols = 6 md = 3><v-card class = text-center variant = tonal color = black :title = countdown.minutes text = 分 /></v-col>
                        <v-col cols = 6 md = 3><v-card class = text-center variant = tonal color = black :title = countdown.seconds text = 秒 /></v-col>
                        <!-- <v-col cols = 6 md = 3><v-card class = text-center variant = tonal color = black :title = countdown.ms text = 毫秒 /></v-col> -->
                    </v-row>
                    <v-row justify = center>
                        <v-col cols = 12 md = 6>
                            <v-hover>
                                <template #default = '{isHovering, props}'>
                                    <a href = 'https://forms.gle/4gZzUWVFvyVikF9k9'>
                                        <v-card variant = tonal rounded = pill v-bind = props :color = 'isHovering ? `primary` : undefined' id = register_now v-ripple>
                                            <template #title>
                                                <v-icon> fa-solid fa-bolt </v-icon>
                                                <b> 立即報名 </b>
                                            </template>
                                        </v-card>
                                    </a>
                                </template>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
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
                {name: '現在報名', icon: 'bolt', href: 'register'}
            ],
            countdown: {
                all: 0,
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0
            }
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
        animate('#register_now', {
            scale: [
                {to: 1.1, duration: 1000},
                {to: 1, duration: 1000}
            ],
            loop: true,
            loopDelay: 300
        })
        setInterval(() => {
            this.update_timer();
        }, 100);
    },
    methods: {
        update_timer() {
            this.countdown.all = (1761926400 * 1000 - Date.now()) / 1000;
            this.countdown.ms = (1761926400 * 1000 - Date.now()) % 1000;
            this.countdown.seconds = Math.floor(this.countdown.all % 60);
            this.countdown.minutes = Math.floor((this.countdown.all / 60) % 60);
            this.countdown.hours = Math.floor((this.countdown.all / 60 / 60) % 24);
            this.countdown.days = Math.floor((this.countdown.all) / 86400);
        }
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
#background {
    z-index: -1;
    position: fixed;
    display: flex;
    background: linear-gradient(20deg, #00FFFF, purple);
}
</style>