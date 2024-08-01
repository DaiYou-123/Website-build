<template>
     <!-- 
        menu 菜单容器
        menu-item 菜单每一项内容
        submenu 二级下拉菜单
            menu-item 下拉菜单内容
            menu-item 下拉菜单内容

        属性：
        menu
            default-active   当前激活菜单的 index
            mode="horizontal"菜单模式 默认垂直    horizontal水平方向 horizontal / vertical
            background-color 菜单颜色
            text-color       文字颜色   active-text-color 选中文字高亮色 
            router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

        submenu 二级下拉菜单
            index	唯一标志	string/null

        menu-item 菜单每一项内容
            index	唯一标志	string
            disabled	是否禁用	boolean
     -->
<div class="header">
    <div class="logo">logo</div>
    <el-menu
    :default-active="$router.currentRoute.value.path" 
    class="el-menu-demo"
    mode="horizontal"
    background-color="#333"
    text-color="#fff"
    active-text-color="#10b041"
    @select="handleSelect"
    router=true
  > <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/dest">目的地</el-menu-item>
    <el-menu-item index="/community">社区</el-menu-item>
    <el-menu-item index="/travel">行程助手</el-menu-item>
    <el-sub-menu index="5">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <div class="header-right">
    <!-- {{userinfo.username}} -->
    <RouterLink to="/login" style="color: #fff">登录</RouterLink>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            activeIndex: '/'
        }
    },
    computed:{
        ...mapState('user',['userinfo']),

    },  

    methods:{
       ...mapMutations('user',['deleteUser']),
        exit(){
            //清空本地存储-----------------------------
            localStorage.removeItem('user');
            //清空vuex 
            this.deleteUser()
            //返回首页
            this.$router.push('/')

        }
    }

}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        background-color: #333;
        color: #fff;

        .logo{
            padding: 0 10px;
            line-height: 60px;
        }
        .el-menu-demo{
            flex:1;
            font-size: 16px;
            font-weight: 700;
        }
        .header-right{
            padding: 0 10px;
            line-height: 60px;
            color: #fff;
        }
    }
</style>
