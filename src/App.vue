<template>
  <!-- 顶部区域导航内容 -->
  <div class="nav">
        <div class="logo">
            <a href="javascript:;" id="logo"></a>
        </div>
        <div class="searchBtn">
            <input type="text" id="search" placeholder="搜索目的地/攻略/游记">
            <img src="./images/btn_search2.png" alt="">
        </div>
        <div class="loginBtn">
            <a href="javaScript:;">登录</a>
        </div>
  </div>
    <!-- 轮播图区域 -->
    <div class="swiper">
        <div class="swiper-wrapper">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :loop=true
            :navigation="navigation"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide><img src="./images/CoNBi2NAKS9CCbj_ACHvj7_wJJ8.png" alt=""></swiper-slide>
            <swiper-slide><img src="./images/CoNCeGNCn55w5VRRAC6_oHKVx1U.png" alt=""></swiper-slide>
            <swiper-slide><img src="./images/CoNImmNBW3kGp-AVACpQL-y4L0Y.png" alt=""></swiper-slide>
          </swiper>  
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"  id="pagination"></div>
    </div>
    <!-- 二级导航 -->
    <div class="navBox">
        <ul>
            <li>
                <div class="nav-img"></div>
                <p>找攻略</p>
              </li>
              <li>
                <div class="nav-img a2"></div>
                <p>看游记</p>
              </li>
              <li>
                <div class="nav-img a3"></div>
                <p>问达人</p>
              </li>
              <li>
                <div class="nav-img a4"></div>
                <p>头脑学园</p>
              </li>
              <li>
                <div class="nav-img a5"></div>
                <p>酒店</p>
              </li>
              <li>
                <div class="nav-img a6"></div>
                <p>去旅行</p>
              </li>
              <li>
                <div class="nav-img a7"></div>
                <p>机票</p>
              </li>
              <li>
                <div class="nav-img a8"></div>
                <p>当地玩乐</p>
              </li>
        </ul>
    </div>
    <!-- 推荐攻略 -->
    <div class="title">
        <b>推荐攻略</b>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <div v-for=" (item,index) in arr_data" :key="index" v-html="item"></div>
     
      <!-- <a href="#">
            <div class="content-title">
             {{item.data.title}}
              <img :src="item.data.image" alt="">
            </div>
            <div class="content-desc">
              <img :src="item.data.image" alt="">
              <div class="home-txt">
                <div class="txt-desc">
                {{item.content}}
                </div>
                <div class="autor">
                  <span>666浏览</span>
                  <span>庞尼西<img src="" alt="" class="touxiang"></span>
                </div>
              </div>
            </div>
          </a> -->
   
        <!-- <a href="#">
            <div class="content-title">
              自驾川西小环线，在千碉之国遇见梨花如雪的季节
              <img src="./images/CoNBi2NAKS9CCbj_ACHvj7_wJJ8.png" alt="">
            </div>
            <div class="content-desc">
              <img src="" alt="">
              <div class="home-txt">
                <div class="txt-desc">
                  这是一篇迟到小半年的游记，想了很久的金川，终于在今年3月末顺利出行，刚好赶上了山花烂漫的季节，据说其花期有不过两周时间，还好这次没有错过。其实出发前还在担心梨花到底开没开，直到周五刷到某书上的实拍，说的周四都还只是花骨朵儿，周五一下就开...
                </div>
                <div class="autor">
                  <span>666浏览</span>
                  <span>庞尼西<img src="" alt="" class="touxiang"></span>
                </div>
              </div>
            </div>
          </a> -->
    </div>

    <!-- 按钮--点击加载更多数据 -->
    <div style="height:1rem;text-align:center;">
        <a href="javascript:;" @click="more">点击加载更多 >></a>
    </div>
    <!-- 返回顶部 -->
        <!-- <a href="javascript:;" class="goTop">返回</a> -->

    
</template>

<script setup>
import { reactive } from "vue"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { getHotCity } from './api/index.js'

let arr = reactive([]);
let arr_data = reactive([]);
let page = 0;
  // 获取当前热门城市
const GetgetHotCity = async (page) => {
    let res = await getHotCity({page:page})
    arr = res.data.data.list;
    console.log('汇总清单列表---', arr,arr.length);
    let str = '';
    for(let i=0;i<arr.length;i++){
      //峰首图标 是否显示
      let img='';
      if(arr[i].data.badge){
        img=`<img src="${arr[i].data.badge.image}" alt="">`
      }
      str += ` <a href="${arr[i].data.jump_url}">
            <div class="content-title">
             ${arr[i].data.title} ${img}
            </div>
            <div class="content-desc">
              <img src="${arr[i].data.image}" alt="">
              <div class="home-txt">
                <div class="txt-desc">${arr[i].data.content}</div>
                <div class="autor">
                  <span>${arr[i].data_source.pv}浏览</span>
                  <span>${arr[i].data.bottom.user.name}
                 
                  </span>
                </div>
              </div>
            </div>
          </a>`;
    }
    arr_data.push(str);
    //打开开关
    flag=true;
}

GetgetHotCity();

//点击加载更多数据
const more =()=>{
  console.log("更多被点击了----");
  page++;
  GetgetHotCity(page);
}


  //下拉到页面的底部 加载更多数据-----------------------------------------------------
  /* 
    1. 滚动事件 滚动到页面的底部的时候？？？ 提前加载
    2. 滚动的高度  文档的高度  窗口的高度
    3. 滚动的高度 + 窗口的高度 >= 文档的高度-100  满足这个条件 可以自动加载下一页的数据
  */
 //定义开关 防止过多请求 请求一次关闭 渲染页面完成开启
 let flag =true;
  window.onscroll = function() {
    //获取滚动的高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // console.log("滚动距离: " + scrollTop);
  //窗口的高度
  let windowHeight = window.innerHeight;
  // console.log("窗口高度: " + windowHeight); // 这个是不变的
  //文档的高度
  let documentHeight = document.documentElement.scrollHeight;
  // console.log("文档高度: " + documentHeight);

  if(scrollTop + windowHeight >= documentHeight -100 && flag){
    //修改flag变量 
    flag=false;
    console.log("下拉到页面底部---自动加载更多数据----");
    //请求下一页数据
    page++;
    GetgetHotCity(page);
  }

};

  
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
}
html {
    font-size: 13.33333vw;
}
@media screen and (min-width: 750px) {
    html {
        font-size: 100px;
    }
}
a {
    text-decoration: none;
}
body {
    font-size: 16px;
    list-style-type: none;
    max-width: 750px;
    margin: 0 auto;
}

.nav {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    
    .logo{
        width: 1.9rem;
        height: 0.5rem;
        padding: 15px 10px 0;

        #logo{
            display: block;
            background: url(./images/logo2.png) no-repeat;
            width: 100%;
            height: 100%;
            background-size: 1.7rem;
        }
    }

    .searchBtn {
        height: 0.6rem;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
        background-color: #eee;

        flex-grow: 10;
        border-radius: .3rem;
        position: relative;

        #search{
            position: absolute;
            height: 0.6rem;
            background-color: transparent;
            border: none;
            outline: none;
            margin-left: 0.1rem;
        }
        img{
            width: 0.35rem;
            position: absolute;
            top: 0.15rem;
            right: 0.3rem;
        };
    }
    .loginBtn{
        flex-grow: 1;
        text-align: center;
        padding-top: .25rem;
        margin-left: .2rem;
        a{
            color: orange;
        }
    }
}

// 轮播图
.swiper {
    width: 7.5rem;
    height: 4.22rem;
 
    img{
        width: 7.5rem;
    }
   
}

// 导航区域
.navBox {
    width: 100%;
    height: 4rem;
    // position: fixed;
    /* padding: 7.5px 7.5px 30px; */
    box-sizing: border-box;
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    li {
        width: 1.8rem;
        height: 1.8rem;
        overflow: hidden;
        text-align: center;
        color: #ff9d00;
        box-sizing: border-box;
        padding-top: .4rem;
    }
    .nav-img {
        width: .92rem;
        height: .92rem;
        background: url(./images/i_nav6.png) no-repeat;
        background-size: 3.75rem;
        margin: 0 auto;
    }
    .a2{
        background-position: 0 -0.92rem;
    }
    .a2+p {
        color: #feca2b;
    }
    
    .a3 {
        background-position: -1.84rem -0.92rem;
    }
    
    .a3+p {
        color: #42d6ba;
    }
    
    .a4 {
        background-position: -0.92rem -0.92rem;
    }
    
    .a4+p {
        color: #f94a87;
    }
    
    .a5 {
        background-position: -0.92rem 0px;
    }
    
    .a5+p {
        color: #32a2f1;
    }
    
    .a6 {
        background-position: -1.84rem 0px;
    }
    
    .a6+p {
        color: #fd4e4e;
    }
    
    .a7 {
        background-position:  -2.76rem 0px;
    }
    
    .a7+p {
        color: #acce0e;
    }
    
    .a8 {
        background-position: -2.76rem -0.92rem;
    }
    
    .a8+p {
        color: #b160df;
    }
}

/* content */
.title>b {
    font-size: 20px;
    border-left: #ffdb53 solid 3px;
    margin-left: 15px;
    padding-left: 5px;
}
.content{
    min-height: 400px;
    .content-title {
        height: 60px;
        padding: 11.25px 56.25px 0 15px;
        box-sizing: border-box;
        color: #111;
        font-size: 18.975px;
        position: relative;
        img {
            width: 40px;
            height: 21px;
            position: absolute;
            right: 0px;
            top: 10px;
        }
    }
    .content-desc {
        box-sizing: border-box;
        height: 114px;
        padding: 9px 15px 15px;
        img {
        width: 130px;
        height: 90px;
        float: left;
        }

        .home-txt {
            float: right;
            width: 199px;
            height: 90px;
            position: relative;
            .txt-desc {
                width: 199px;
                height: 60px;
                line-height: 18px;
                box-sizing: border-box;
                padding-top: 5.25px;
                font-size: 14px;
                color: #999;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
            }
        }
    }
    .touxiang {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 5px;
}
    .autor {
        width: 100%;
        position: absolute;
        bottom: 0px;
        font-size: 12px;
        color: #999;
    }
    .autor img{
        width: 2.6rem;
        vertical-align: middle;
    }
    .autor>span:first-child {
        float: left;
        display: block;
    }
    
    .autor>span:last-child {
        position: absolute;
        right: 0px;
        height: 23px;
        line-height: 23px;
    }
}
/* 返回顶部 */
.goTop{
    position: fixed;
    right:0.1rem;
    bottom: 0.2rem;
    background-color: #999;
    color: #fff;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    display: none;

}

</style>
