<template>
    <div>
        <v-card id = members color = transparent>
            <v-row justify = center class = align-content-center>
                <v-col cols = 12>
                    <v-card title = '團隊成員' class = text-center variant = tonal id = members_title />
                </v-col>
                <template v-for = 'i in data' :key = i>
                    <v-col cols = 12 md = 4 lg = 3>
                        <v-dialog>
                            <template #activator = '{props: a}'>
                                <div v-bind = a>
                                    <v-hover>
                                        <template #default = '{isHovering, props}'>
                                            <v-card
                                                class = 'ma-3 text-center align-content-center'
                                                v-bind = props
                                                v-ripple
                                                
                                                :style = '$vuetify.display.mdAndUp ? `height: 50vh` : `height: 30vh`'
                                                :variant = '!isHovering ? `tonal` : undefined'
                                                :color = 'isHovering ? `primary` : undefined'
                                            >
                                                <template #image>
                                                    <v-img :src = '`members/photo/${i.username}.jpg`' cover />
                                                </template>
                                                <template #title>
                                                    {{ i.name }}
                                                </template>
                                            </v-card>
                                        </template>
                                    </v-hover>
                                </div>
                            </template>

                            <v-row justify = center :prepend-avator = '`members/photo/{i.username}.jpg`' >
                                <v-col cols = 12 md = 6 lg = 4>
                                    <v-card class = 'text-center align-content-center'>
                                        <template #title>
                                            {{ i.name }}
                                        </template>
                                        <template #subtitle>
                                            <b> {{ i.school }} </b>
                                            <b> {{ i.major }} </b>
                                            <b> {{ i.grade }} 年級生 </b>
                                        </template>
                                        <template #text>
                                            {{ i.introduction }}
                                        </template>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-dialog>
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
            data: [{'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生物醫學工程學系', 'username': 'yuchi930914', 'introduction': '哈嘍！我是教學組的鄭伃淇～我的IG是cyc_930914，如果對YCBS有任何問題的話都可以問我！', 'name': '鄭伃淇', 'grade': 3.0, 'school': '中原大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物及解剖學研究所', 'username': 'kaiwu', 'introduction': '嗨大家好～我是吳楷萱，也可以叫我吳楷或 Sandy。朋友覺得我話很多，但我自己覺得還是算比較沉穩的哈哈。\n除了做實驗平常我喜歡拍照唱歌、去逛展覽，還有運動超級重要，最近要去學新項目拳擊，下次見到我的話可以問我學得如何哈哈。\n再來想說說加入 YCBS的初衷，是想讓自己走出實驗室，給自己一個探索產業的機會，很幸運的我有因此開了點腦🤏，雖然未來如何也不知道。ins:18_L2.LL3', 'name': '吳楷萱', 'grade': 8.0, 'school': '國防醫學大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生命科學系 Life Science ', 'username': 'yuan555lin', 'introduction': '哈囉大家～這裡是張圓培，綽號芋圓培根！我是清大生命科學系的學生。對生醫領域的微生物和機器學習有興趣，參加過合成生物競賽、中研院統計所實習、各種創新創業Hackathon。我是個點子多、愛交朋友的E人！還在猶豫什麼～快來生技創業營認識我吧！\nHello! I’m Yuan-Pei Chang, also known as Beryl! I’m a Life Science student at National Tsing Hua University. I’m passionate about microbiology and machine learning. I’ve participated in synthetic biology competition (iGEM), an internship at Academia Sinica’s Institute of Statistical Science, and various innovation and entrepreneurship hackathons. I’m an extrovert full of ideas who loves making new friends! So what are you waiting for? Come meet me at the YCBS Biotech Entrepreneurship Camp!', 'name': '張圓培 Yuan-Pei,Chang ', 'grade': 3.0, 'school': '國立清華大學'}, {'th': '第三屆', 'group': '總務組', 'role': '組長', 'major': '神經科學研究所', 'username': 'yixunn', 'introduction': '哈囉～我是陳以薰，\n平常的興趣是聽音樂、看劇或電影，偶爾也會看一些懸疑小說。\n我平常比較安靜，但是如果來跟我講話我一定會回應的，雖然可能會配個尷尬的微笑哈哈哈哈\n不過我只是有點慢熟啦，熟了也是可以嘰哩呱啦說個不停的～歡迎大家多來跟我聊聊天喔！', 'name': '陳以薰', 'grade': 7.0, 'school': '陽明交通大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '醫學系', 'username': 'allyli0223', 'introduction': '踏入生技領域，就像探索一片未知的科學宇宙，每個人都是閃耀的星星，共同點綴成美麗的天際。在 YCBS，我們能藉由國家生技研究園區的資源，參與各種生技教學與推廣活動，發現自己的興趣並勇敢實踐想法。我很喜歡與不同背景的夥伴一起學習、一起成長的感覺，也希望更多人能感受到生技的魅力與可能性，歡迎大家加入我們，一起交流與成長～～', 'name': '李宛虹', 'grade': 3.0, 'school': '長庚大學'}, {'th': '第三屆', 'group': '總務組', 'role': '組員', 'major': '醫技系', 'username': 'elina.ai6sm3.be13', 'introduction': '很愛到處逛到處走專程不搭車（非大太陽火烤時段），有時間就會特別出門一下，有酷活動可以揪我！\n是超級路痴方向感0，完全靠Google 地圖在走路，邊講話邊走路就會走過頭\n不是太喜歡昆蟲，壁虎可以蜘蛛也可以，但六隻腳就是走開\n喜歡吃東西，可是別問我好不好吃，窩……補知道，大部分不要太怪我應該都覺得不錯吧\n其他活動可能就豎笛和游泳吧，可能可以交流\n阿不會台語的程度非常誇張，認真聽不懂，但現在可能知道一點點了，拜服學所賜\n拍照通常拍東西 » 拍人', 'name': '張育嘉', 'grade': 2.0, 'school': '陽明交通大學'}, {'th': '第一屆', 'group': '召部', 'role': '組員', 'major': '百川學士學位學程', 'username': 'shaioyuu', 'introduction': '生物科技 & 人文社會學雙主修；iGEM NYCU_Formosa2022 model 組員；研究旨趣／領域是演化學、生物工程、生物資訊與多物種人類學。', 'name': '林詩軒', 'grade': 4.0, 'school': '國立陽明交通大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組長', 'major': '生物醫學工程學系', 'username': 'yschuang2712', 'introduction': '嗨嗨~我是莊育瑄，非常慢熱但熟起來很瘋，面無表情看起來有點兇但其實我在發呆，思緒早已飛到外太空。平時休閒娛樂喜歡看電影、拼拼圖、鉤針、遊泳。來到 YCBS 認識到許志向相投的人類，也開啓了創新創業的大門，成為很多競賽和產業課程的鑰匙，還在持續探索當中💪', 'name': '莊育瑄', 'grade': 4.0, 'school': '中國醫藥大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生化科技系', 'username': 'annchen ', 'introduction': '大家好！我是陳奕安，是新竹人，現在是臺大生化科技系的學生，興趣很廣泛、很喜歡接觸新的東西，大家可以多跟我分享事情，也請多多指教！', 'name': '陳奕安', 'grade': 3.0, 'school': '臺灣大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物科技學系', 'username': 'banana', 'introduction': '大家好我叫劉恒謙，興趣是籃球，喜歡的遊戲類型是格鬥遊戲。最近想買一支遊戲的專用手把但覺得有點貴，希望有人能贊助我。我的email: Banana@ycbs.tw', 'name': '劉恒謙', 'grade': 5.0, 'school': '陽明交通大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物技術與動物科學系', 'username': 'shellywu', 'introduction': '大家好～我是YCBS的IG小編～\n是住在新北的台中人(懷念台中的太陽…)，\n也是個I的人，但是有工作模式會裝E。\n出門就不想回家，回家就不想出門…\n喜歡音樂、畫畫、手作，\n歡迎大家來跟我聊天、做朋友～', 'name': '吳奕璇', 'grade': 4.0, 'school': '國立宜蘭大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生化科技學系', 'username': 'weishan ', 'introduction': '大家好！我是來自臺大生化科技系的張維珊，個性開朗樂觀，是個隨和好相處的isfj ，目前最大的興趣是經營ig 巧虎帳，喜歡幫我的吃飯和睡覺（他們的名字）拍網美照上傳，夢想是帶我的巧虎環遊世界。', 'name': '張維珊', 'grade': 3.0, 'school': '臺灣大學'}, {'th': '第三屆', 'group': '召部, 是說召部沒有特別分組長組員來著，雖然我也不知道另外兩位是怎麼填的', 'role': '組長', 'major': '生命科學系', 'username': 'shuinathruster', 'introduction': '嗨唷我是召部的李訓愛，就讀台大生科\n有點慢熱，喜歡做幕後和動腦工作\n熟起來會變成抽象樂子人，興趣很雜，什麼都可以聊聊', 'name': '李訓愛', 'grade': 2.0, 'school': '台大'}, {'th': '第三屆', 'group': '召部', 'role': '組員', 'major': '生物科技系', 'username': 'imasheeeeep', 'introduction': '我是陳欣妤，現任 YCBS 召部成員。對創新與實踐充滿熱情，雖然目前還沒有明確的創業方向，但相信每一次嘗試都是邁向夢想的起點。', 'name': '陳欣妤', 'grade': 3.0, 'school': '國立高雄師範大學'}, {'th': '第三屆', 'group': '召部', 'role': '組長', 'major': '生物科技系', 'username': 'bosshsieh', 'introduction': '我是謝興永，第四屆YCBS總召，喜歡挑戰自我、預測變化，把新點子變成實體，曾在中研院、國衛院實習，是身兼多職的斜槓人。\n對我來說，研究與創業都是如此——判斷、佈局、出手。\n我不追求最熱鬧的戰場，只選最有勝算的位置。', 'name': '謝興永', 'grade': 4.0, 'school': '國立高雄師範大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組長', 'major': '生醫系', 'username': 'wendy', 'introduction': '我是一個熱愛探索生活的活潑女孩！平時喜歡打排球、追劇、旅行和品嚐美食。對新事物充滿好奇，喜歡在體驗與學習中發現樂趣。不論是實驗室裡的研究，還是旅途中的風景，我都享受從中找到屬於自己的節奏與故事。', 'name': '楊喻晴', 'grade': 3.0, 'school': '長庚大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物科技系', 'username': 'tjc0220', 'introduction': '我是曾柔嘉（我其實想不到要寫什麼）\n在生物與各種跨領域之間跳來跳去、進來出去，希望可以有一些碰撞\n但不要打我，大家也都不是笨蛋', 'name': '曾柔嘉', 'grade': 5.0, 'school': '國立陽明交通大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生物醫學工程學系', 'username': 'huan10261213', 'introduction': '嗨我是蔡東桓，高雄人。喜歡聊天，但偶爾也喜歡自己待著放空。很喜歡看各種課外小説、散文，也喜歡打羽球，不過最重要的興趣絕對是音樂，會聽團，也喜歡演奏，分別學了豎笛12鋼琴9小提琴5年然後今年正在學打擊四棒，打擊真的很好玩。實驗室偏生醫材料，去年跑去美國實習2個月，有好奇的問題都可以問我喔', 'name': '蔡東桓', 'grade': 4.0, 'school': '中國醫藥大學'}, {'th': '第二屆', 'group': '活動組', 'role': '組長', 'major': '生醫科學與工程學系', 'username': 'tsaifamily7771', 'introduction': '我是一個努力在利用ai幫助製藥的人，在這個ai的浪潮，我看到了ai賦能生技產業的機會，在YCBS大家庭的薰陶下，我創辦了一家專注於研發新一代藥物開發人工智慧代理人的公司，針對提早預測抗藥性於臨床實驗前的議題而努力，希望藉此讓台灣的生技產業帶來新的機會', 'name': '蔡政勳', 'grade': 4.0, 'school': '中央大學'}, {'th': '第二屆', 'group': '召部', 'role': '組長', 'major': '生化科技學系', 'username': 'a31299348', 'introduction': '窩是要成為海賊王的男人', 'name': '黃柏勝', 'grade': 'None', 'school': '國立台灣大學'}, {'th': '第二屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '大學：生命科學系暨基因體科學研究所 雙主修 生醫工程學系；研究所：跨領域分子醫學碩士學位學程', 'username': 'angelhsu0036', 'introduction': '嗨囉我是第二屆的恩琪，很開心能加入YCBS的大家庭，除了一起協辦國家生技園區的各種活動，認識了生技新創的各類專家及來自不同學校志同道合的朋友們，我也在這段實習經歷中獲得很多新知，和這群優秀的夥伴們一起成長！', 'name': '許恩琪', 'grade': 8.0, 'school': '國立陽明交通大學'}]
        }
    },
    mounted() {
        M.AutoInit();
        var n = window.innerHeight;
        var m = window.innerWidth;
        var now = window.scrollY;
        animate('#members', {
            'backdrop-filter': 'blur(50px)',
            autoplay: onScroll({
                enter: 'center top',
                leave: 'top bottom',
                sync: true
            })
        })
        animate('#members_title', {
            y: '1rem',
            opacity: 0,
            reversed: true,
            autoplay: onScroll({
                enter: 'center center',
                leave: 'top+=100px top',
                sync: true
            })
        })
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
#legs {
    filter: blur(50px);
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