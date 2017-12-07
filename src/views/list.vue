<template>
  <div class="list main_content">
      <div class="breadcrumb breadcrumb_source" v-if="!!$route.meta.breadcrumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="breadcrumb in $route.meta.breadcrumbs" :to="breadcrumb.href">
                {{breadcrumb.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="">
        <el-row>
            <el-col :span="4">
                <el-menu default-active="2" class="el-menu-vertical-demo search_menu" active-text-color="#ff5900"
                @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>精品糕点</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="glyphicon glyphicon-fire"></i>
                                <span>今日特价</span>
                            </template>
                            <el-menu-item index="1-1">奶油慕斯蛋糕</el-menu-item>
                            <el-menu-item index="1-2">水果蛋糕</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="glyphicon glyphicon-flag"></i>
                                <span>限时5折</span>
                            </template>   
                            <el-menu-item index="1-3">马卡龙</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">饮料</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">套餐</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20">列表</el-col>
        </el-row>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
      return {

      }
  },
  methods: {
    handleOpen(key, keyPath) {
    console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    console.log(key, keyPath);
    }
  }
}
</script>


<style lang="scss">
@import url('../style/common.css');
.list{
    background-color: #f2f2f2;
    min-height: 200px;
}
.main_content{
    padding:20px 10%;
}
.search_menu li{
    width:100%;
    text-align: left;
}
.el-menu-item-group__title{
    color:#f600ff;
    font-weight: 700;
}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
    background-color: #2b1400;
    color:#ff5900;
    i{
        color:#ff5900;
    }
}
.el-submenu .el-menu-item{
    min-width: 190px;
}
</style>

