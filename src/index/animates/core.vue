<template>
    <div class = 'bs align-content-center'>
        <v-card id = three color = transparent class = align-content-center variant = flat>
            <v-row justify = center class = align-content-center>
                <v-row justify = center>
                    <v-col col = 12 md = 6 lg = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card :variant = 'isHovering ? undefined : `tonal`' :color = 'isHovering ? `primary` : undefined' v-bind = props>
                                    <template #title>
                                        <b style = 'font-size: 30px' class = text-white> 營隊宗旨 </b>
                                    </template>
                                    <template #text>
                                        <p style = 'font-size: 20px' class = text-white>
                                            國家生技研究園區成立此營隊，盼透過課程及活動，理論與實踐併進，以此提升學員的專業知能、對創新產業的認知，激發學生的創業熱情。<br><br>
                                            透過生技商業概念介紹、BP簡報製作、設計思考工作坊及生技法規介紹，輔以產業沙龍及創投公司實操經驗分享，每一組別皆會發想實作商業簡報並參加模擬創業競賽，致力於將台灣生技生醫新創理念向下紮根於新世代，增進學員對生技生醫新創產業的認識。
                                        </p>
                                    </template>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
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
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
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
}
#three {
    height: 100vh;
    /* backdrop-filter: blur(40px); */
}
</style>