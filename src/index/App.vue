<template>
  <v-app>
    <page_loader :loading = 'loading' />
    <!-- <title_nav /> -->

    <!-- {{ mobile }} -->
    
    <v-main>
        <index_wallpaper />
    
</v-main></v-app>

<site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
// import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'
import index_wallpaper from '@/index/wallpaper.vue'

import { useDisplay } from 'vuetify'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['wetlab', 'integrated-human-practices', 'education', 'members'],
            vw: [],
            show_nav: false,
            alpha: {
                card: {
                    style: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                page: {
                    color: '#f2ffde'
                }
            },
            mobile: useDisplay(),
            video_play: false
        }
    },
    components: {
        title_nav,
        page_loader,
        site_footer,
        index_wallpaper
    },
    mounted() {
        M.AutoInit();
        this.title('this is a book');
        $.get('.')
        this.vw = new Array(this.pre.length);
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        submit() {
            M.toast({html: 'submit'});
            return;
        },
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        view(i) {
            this.vw[i] = true;
        },
        endview(i) {
            this.vw[i] = false;
        },
        set_html_color(x) {
            this.alpha.page.color = x;
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
.center {
  position: fixed;
  left: calc(50% - 70px);
  transform: translateX(50%);
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.button {
    text-decoration: none;
}
.placeholder {
    background-color: transparent;
    /* display: block; */
    height: 120px;
    /* position: absolute; */
}
.msgbox {
    z-index: 1000;
    position: fixed;
    backdrop-filter: blur(20px);
    background-color: rgba(100, 100, 100, .75);
    top: 10vh;
    left: 35vw;
    width: 30vw;
    height: 50vh;
    border-radius: 10px;
}
.scroller {
    background-color: black;
    min-height: 200vh;
    background-attachment: fixed;
    background-position: 80% 45%;
    background-repeat: no-repeat;
    background-size: contain;
    backdrop-filter: blur(10px);
    display: block;
    overflow: hidden;
}
.Taiwan {
    background-color: black;
    min-height: 300vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain;
    backdrop-filter: blur(10px);
    display: block;
    overflow: hidden;
}   
.transparent-card {
    position: absolute;
    top: 10vw;
    left: 10vw;
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
}
.transparent-card_TW {
    position: absolute;
    top: 130vw;
    left: 55vw;
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
}

#filter-inside {
    background-color: rgba(255, 255, 255, .34);
    width: 45vw;
    height: 10vw;
    z-index: 10;
    position: fixed;
    top: 10%;
    left: 50vw;
    backdrop-filter: blur(30px);
    border-radius: 10px;
}
.mtext {
    font-size: 25px;
}
.stext {
    font-size: 20px;
}
/* .v-card-text * {
    font-size: 20px;
} */
</style>