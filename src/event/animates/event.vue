<template>
    <div>
        <v-card id = event color = transparent variant = text>
            <v-row justify = center class = align-content-center>
                <v-col cols = 12 md = 9>
                    <v-hover>
                        <template #default = '{isHovering, props}'>
                            <v-card v-bind = props :class = 'isHovering ? undefined : `glass`'>
                                <template #prepend>
                                    <!-- <v-card v-if = '$vuetify.display.lgAndUp' color = grey title = '1/28 - 1/30' subtitle = 2026 class = 'text-center ma-5' /> -->
                                    <!-- <v-img src = Logo/logo.png /> -->
                                </template>
                                <template #append>
                                    <v-card v-if = '$vuetify.display.mdAndUp' color = green-darken-2 variant = tonal title = '國家生技園區' class = 'text-right' subtitle = 地點 append-icon = 'fa-solid fa-map' />
                                    <v-card v-if = '$vuetify.display.mdAndUp' color = cyan variant = tonal :subtitle = 'now > 0 ? `進度` : `費用`' :title = 'now > 0 ? `${Math.floor(this.now)}%` : `$3500 / 4000`' class = 'ma-3' />
                                </template>
                                <template #title>
                                    4th 第四屆 
                                </template>
                                <template #subtitle>
                                    YCBS 國家生技研究園區 生技青年創業營
                                </template>
                                <template #text>
                                    <v-row v-if = '!$vuetify.display.mdAndUp'>
                                        <v-col v-for = 'i in data' :key = i cols = 12 md = 4>
                                            <v-card
                                                :prepend-icon = '`fa-solid ${i.icon}`'
                                                :color = i.color
                                                :text = i.text
                                                :title = i.name
                                            />
                                        </v-col>
                                    </v-row>
                                    <div class = 'ma-3'>
                                        <v-progress-linear color = amber value = 100 height = 22 v-model = now rounded = lg></v-progress-linear>
                                        <div class = 'd-flex justify-space-between'>
                                            <span><b class = 'text-amber'> 營隊{{ now > 0 ? '' : '將' }}開始於 2026 1/28 </b></span>
                                            <span><b> 營隊{{ now < 1 ? '將' : '' }}於 2026 1/30 結束</b></span>
                                        </div>
                                    </div>
                                </template>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
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
            data: [
                {name: '地點', text: '國家生技園區', href: undefined, icon: 'fa-map', color: 'green'},
                {name: '時間', text: '2026 1/28 - 1/30 共三天', href: undefined, icon: 'fa-clock', color: 'cyan'},
                {name: '費用', text: '新台幣 3500 / 4000 元', href: undefined, icon: 'fa-coins', color: 'amber'},
                // {name: '地點', text: '國家生技園區', href: undefined, icon: 'fa-map', color: 'green'}
            ],
            start: 1769529600,
            end: 1769788800,
            now: 0,
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
        this.now = (Date.now() / 1000 - this.start) / (this.end - this.start);
        this.now = (this.now < 0 ? 0 : (this.now > 1 ? 1 : this.now)) * 100;
        // alert(this.now);
    },
    methods: {
    }
}
</script>

<style scoped>
.ct {
    /* position: absolute; */
    top: 50%;
    width: 100vw;
    /* text-align: center; */
}
#showcase {
    height: 100vh;
}
</style>