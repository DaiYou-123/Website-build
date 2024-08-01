<template>
    <div class="home">
        <!-- 轮播图组件 -->
        <div class="banner">
            <Banner></Banner>

            <!-- 搜索框内容 -->
            <div class="search">
                <el-row>
                    <el-col :span="8" :offset="10">
                        <div :class="{ bg: isShow }">

                        </div>
                        <div class="bg_input">
                            <!-- getInput获取焦点，显示v-show搜索框 -->
                            <el-input v-model="input" style="width: 400px" @focus="getInput" @blur="leaveInput"
                                placeholder="Please input" />
                        </div>
                        <div class="list" v-show="isShow">
                            <p class="info">温馨提示：可以直接输入城市的中文、英文来匹配检索</p>
                            <div class="title">热门城市</div>
                            <div class="hot-city">
                                <a href="##" v-for="item in hotcity" :key="item.id">{{ item.name }}</a>
                            </div>
                            <!-- 显示搜索的列表内容展示-----  -->




                        </div>
                    </el-col>
                </el-row>

            </div>
            <!-- -----两个图片----------------------------------- -->

            <!-- -----今日推荐----------------------------------- -->
            <div class="section">
                <div class="wrapper">
                    <div class="title-th"><a href="##" class="notice"><span>出境游安全提示</span></a>今日推荐</div>
                    <div class="content">
                        <el-row :gutter="20">

                            <el-col :span="6" v-for="(item, index) in todyInfo" :key="item.data.id">
                                <div class="item">
                                    <img referrerpolicy="never" :src="item.data.pic" alt="" width="275px" height="185px">
                                    <div class="info">
                                        <div class="subtitle">{{ item.data.subject }}</div>
                                        <div class="bottom">
                                            <template v-if=" item.type == 'video' ">
                                                <span class="f14">{{ item.data.desc }}</span>
                                                <span class="fr">{{ item.data.tag }}</span>
                                            </template>
                                            <template v-else-if=" item.type == 'bbs' ">
                                                <span class="f14">{{ item.data.username }}</span>
                                                <span class="fr">{{ item.data.views }}人浏览过</span>
                                            </template>
                                            <template v-else >
                                                <span class="f14 money" v-html="item.data.price"></span>
                                                <span class="fr">{{ item.data.start_pos }}</span>
                                            </template>
                                            
                                        </div>
                                    </div>
                                </div>
                            </el-col>

                        </el-row>
                    </div>
                </div>
            </div>

            <!-- 穷游商城---------------------------------------- -->
            <Shop></Shop>

            <!-- 热门游记与话题----------------------------------- -->
            <HomeTravel></HomeTravel>
        </div>
    </div>

</template>

<script setup>
import { } from "vue"
import Banner from "./banner/Banner.vue";
import Shop from "./shop/Shop.vue";
import HomeTravel from "./travel/HomeTravel.vue";
import { getHotCity, getTodyInfo } from '@/api/index.js'
import { ref } from 'vue'
const input = ref('')
let isShow = ref(false)
let hotcity = [];
let todyInfo = [];

const getInput = () => {
    isShow.value = true;
}
const leaveInput = () => {
    isShow.value = false;
}

// 获取当前热门城市
const GetgetHotCity = async () => {
    let res = await getHotCity()

    hotcity = res.data.result.hotcity;
    // console.log('汇总清单列表---', hotcity);
}

GetgetHotCity();

// 获取当前热门城市
const GetgetTodyInfo = async () => {
    let res = await getTodyInfo()

    todyInfo = res.data.data;
    console.log('汇总清单列表---', todyInfo);
}

GetgetTodyInfo();

</script>

<style lang="scss" scoped>
.bg {
    background-color: rgba(255, 255, 255, .5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 300px;
}

.home {
    position: relative;
    background-color: #fff;

    .banner {
        position: relative;
    }

    .search {
        position: absolute;
        width: 100%;
        top: 200px;
        z-index: 99;

        .list {
            position: absolute;
            width: 400px;
            height: 240px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 20px;

            // line-height:1;
            .info {
                font-size: 12px;
                color: #999;
            }

            .title {
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            }
        }

        :deep(.bg_input) {
            border-radius: 6px;
            background-image: linear-gradient(90deg, rgba(40, 213, 164, .8), rgba(38, 208, 181, .8));
            display: flex;
            align-items: center;
            padding: 10px;
        }

        .hot-city {
            a {
                display: inline-block;
                margin: 20px 30px 10px 0;
                font-size: 14px;
                color: #666;
                text-decoration: none;
            }
        }
    }

    // //搜索列表容器
    // .search-list {
    //     width: 100%;
    //     min-height: 60px;
    //     background: #fff;
    //     padding-top: 10px;
    //     padding-bottom: 10px;
    //     border-radius: 6px;
    //     margin-top: -5px;

    //     li {
    //         // line-height: 40px;
    //         padding: 12px;
    //         font-size: 14px;
    //     }

    //     .subname {
    //         color: #999;
    //     }
    // }
}

// 今日推荐页面 ------------------------------------
.wrapper {
    margin: 0 auto;
    width: 1160px;
    position: relative;
}

.title-th {
    margin: 10px;
    height: 74px;
    color: #636363;
    text-align: center;
    font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;

    .notice {
        background: #02db94;
        border-radius: 20px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        display: block;
        position: absolute;
        left: 0;
        top: 17px;

        span:before {
            content: "";
            display: inline-block;
            background: url(https://fes.qyerstatic.com/FoHcIRgBY9BWd6lSLxr6NVArmEaL);
            background-size: 16px 16px;
            vertical-align: -2px;
            height: 16px;
            width: 16px;
            margin-right: 8px;
        }

        span:after {
            content: "";
            display: inline-block;
            background: url(https://fes.qyerstatic.com/FkvmdDl4snzkbZzyQCrfMQMBeicW);
            background-size: 7px 11px;
            width: 7px;
            height: 11px;
            margin-left: 8px;
        }
    }
}

.content {


    .item {
        width: 275px;
        height: 300px;
        margin-bottom: 20px;

        img {
            width: 100%;
        }
    }

    .info {
        padding: 0 18px;
        border: 1px solid #ececec;
        border-top: 0;
        height: 114px;
        line-height: 24px;
        overflow: hidden;


        .subtitle {
            margin-top: 14px;
            height: 48px;
            font-size: 16px;
            overflow: hidden;
        }

        .bottom {
            margin-top: 16px;
            height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #636363;
            font-size: 12px;
            font-weight: 700;

            .fr {
                color: #959595;
                float: right;
            }

            .money {
                :deep(em) {
                    font-size: 18px;
                    color: #ff7466 !important;
                }
            }

            .f14 {
                display: inline-block;
                max-width: 60%;
                min-width: 50%;
                color: #636363;
                font-size: 14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }
}
</style>
