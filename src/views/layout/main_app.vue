<template>
  <div class="main_app">
    <nav-bar></nav-bar>
    <div class="breadcrumb breadcrumb_source" v-if="!!$route.meta.breadcrumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(breadcrumb,index) in $route.meta.breadcrumbs" :to="breadcrumb.href" :key="index">
                {{breadcrumb.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <bottom></bottom>
  </div>
</template>

<script>
import navBar from '@/views/layout/nav_bar'
import bottom from '@/views/layout/bottom'
export default {
    components: {navBar,bottom}
}
</script>

<style>
.breadcrumb{
  padding: 20px 0 0 4%;
  background-color:#f2f2f2;
  margin: 0;
}
@media screen and (max-width:600px){
  .breadcrumb{
    display: none;
  }
}
</style>


