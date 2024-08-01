<template>
  <div class="search">
    <div class="content">
      <div class="title">你好, 世界!</div>
      <div class="input">
        <el-input v-model="input" @blur="close" @focus="open" placeholder="搜索国家、城市、目的地"></el-input>
        <el-button class="btn"><i class="iconfont icon-sousuo"></i>搜索</el-button>
      </div>
      <!-- 搜索下拉容器 -->
      <div class="list" v-show="isShow">
        <ul v-if="search_list.length > 0">
          <li v-for="item in search_list" :key="item.id">
            {{item.name}}
          </li>
        </ul>
        <div v-if="search_list.length <= 0 && mark" class="loading">数据加载中...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch ,reactive} from "vue"
import { getDestSearch } from "@/api/index";

let isShow = ref(false);
let input = ref();
let search_list = reactive([]);
let mark = ref(true);

const close = () => {
  isShow.value = false;
}
const open = () => {
  isShow.value = true;
}

watch(input, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
  GetgetDestSearch(newValue);
})

// 获取商品数据
const GetgetDestSearch = async (val) => {
    let res = await getDestSearch( {keyword: val} )
    console.log('搜索结果---', res.data.data.list);
    search_list =  res.data.data.list;
    if(search_list.length == 0){
      // 无数据
      mark = false;
    }
}




</script>

<style lang="scss" scoped>
.search {
  background: #efefef url('@/assets/images/bg.jpg') no-repeat top;
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;

  .content {
    width: 760px;
    margin: 0 auto;
    position: relative;

    .list {
      position: absolute;
      width: 621px;
      min-height: 100px;
      background: #fff;
      top: 146px;
      border-radius: 6px;
      overflow: hidden;
      //  padding:20px;
      font-size: 12px;
      color: #444;

      li {
        line-height: 36px;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 1px solid #eee;
      }

      li:hover {
        background: pink;
      }

      .loading {
        color: #999;
        line-height: 100px;
        text-align: center;
      }
    }

    .title {
      font-size: 56px;
      color: #fff;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 5px 5px rgb(0 0 0 / 10%);
      margin-bottom: 30px;
    }

    .input {
      display: flex;

      // 
      :deep(.el-input__inner) {
        border-radius: 4px 0 0 4px;
      }

      .btn {
        width: 160px;
        height: 53px;
        color: #fff;
        font-size: 16px;
        background-color: #28b76c;
        border: 1px solid #27ad66;
        border-radius: 0 4px 4px 0;

        .icon-sousuo {
          padding-right: 6px;
          font-size: 14px;
        }
      }

      .btn:hover {
        color: #fff;
      }

      :deep(.el-input__inner) {
        height: 50px;
      }
    }
  }
}

.wrapper {
  height: 400px;
}
</style>
