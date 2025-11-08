<template>
    <v-card class = 'bs' id = background align = center justify = middle min-height="100vh">
        <template #image>
            <v-img src = 'Logo/logo.png' id = logo max-height = 100vh max-width = '100vw' />
        </template>
    </v-card>
    <div class = bs>
        <v-card id = zero color = transparent class = 'align-content-center text-center' variant = text>
            <div class = 'align-content-center text-center show'><v-card variant = text title = 歡迎，YCBS成員 class = 'black-text' /></div>
            <div class = 'align-content-center text-center show'><v-card variant = text title = 這裡是我們的官網 class = 'black-text' /></div>
            <div class = 'align-content-center text-center show'><v-card variant = text title = 相信你各位都已經看過網站了對吧 class = 'black-text' /></div>
            <div class = 'align-content-center text-center show final'>
                <v-container>
                    <v-card
                        title = 回饋表
                        subtitle = 有甚麼想說的嗎
                        class = glass

                        v-ripple
                    />
                    <v-card class = glass>
                        <template #text>
                            <v-row>
                                <v-col cols = 12 md = 4 lg = 3 v-for = 'i in data' :key = i>
                                    <v-hover>
                                        <template #default = '{isHovering, props}'>
                                            <a :href = 'i.url'>
                                                <v-card v-bind = props :color = 'isHovering ? `primary` : undefined' :title = i.date :subtitle = i.title :text = i.message :prepend-avatar = i.avatar>
                                                    <!-- <b v-for = 'j, k in i' :key = k>
                                                        {{ k }}: {{ j }}
                                                    </b> -->
                                                </v-card>
                                            </a>
                                        </template>
                                    </v-hover>
                                </v-col>
                            </v-row>
                        </template>
                    </v-card>
                </v-container>
            </div>
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
            data: []
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;

        animate('.show', {
            opacity: [
                {to: 10, duration: 500},
                {to: 0, duration: 1000},
            ],
            delay: stagger(2000),
            onComplete: () => $('.final').css({opacity: 1})
        })
        $.get('https://api.github.com/repos/mysh212/ycbs_frontend/commits', (response) => {
            var get_commit = (x) => {
                var now = x.commit.author;
                now['title'] = x.commit.message.substr(0, x.commit.message.indexOf('\n'));
                now['message'] = x.commit.message.substr(x.commit.message.indexOf('\n') + 1);
                now['avatar'] = x.author.avatar_url;
                now['url'] = x.html_url;
                return now;
            };
            this.data = response.map(get_commit);
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
#background {
    z-index: -1;
    position: fixed;
    display: flex;
    background: linear-gradient(20deg, pink, #00AAAA);
}
#zero {
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#logo {
    filter: blur(10px);
}
.show {
    opacity: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>