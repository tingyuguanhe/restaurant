<template>
  <div class="layout_nav" ref="abc">
      <div class="head_top">  
        <ul class="top clearfix">
                <li>
                    <div class="search_icon" @click="show_search_input">
                        <i class="el-icon-search"></i>
                    </div> 
                    <div v-if="search_input_show" class="search_input">
                        <el-input v-model="input5" placeholder="请输入内容"></el-input>
                        <i class="el-icon-close" @click="hide_search_input"></i>
                    </div>
                    
                </li>
                <li>
                    <ul class="top_right f14 clearfix">
                        <li>登录</li>
                        <li>注册</li>   
                        <li class="shopping_cart">
                            <div class="cart_icon">   
                                <span class="glyphicon glyphicon-shopping-cart"></span>
                                <b>99</b>
                            </div>
                            <div class="cart_box">
                                哇！您的购物车太干净了
                            </div>
                        </li>     
                    </ul>
                </li>
        </ul>
        <div class="logo">
            <img src="../../assets/logo.png" width="20%" alt="">
        </div>
      </div>
      <transition name="el-zoom-in-top">
        <header class="header_nav" :class="{'nav_bar_fixed': navBarFixed}">
            <a href="javascript:;" class="fixed_logo" v-if="navBarFixed"><img src="../../assets/logo.png" width="100%" alt=""></a>
            <el-menu :default-active="activeIndex" class="el-menu-demo fixed_menu" mode="horizontal" active-text-color="#ff5900"
            @select="handleSelect">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">所有滋味</template>
                    <el-menu-item index="2-1">主食</el-menu-item>
                    <el-menu-item index="2-2">果汁</el-menu-item>
                    <el-menu-item index="2-3">酒水</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">美食日记</el-menu-item>
                <el-menu-item index="4">顾客推荐</el-menu-item>
                <el-menu-item index="5">联系我们</el-menu-item>
            </el-menu>
        </header>
      </transition>
  </div>
</template>

<script>
export default {
  data(){
      return{
        activeIndex: '1',
        activeIndex2: '1',
        input5:'',
        search_input_show: false,
        navBarFixed: false
      }
  },
  mounted () {
      window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      show_search_input(){
          this.search_input_show = true;
      },
      hide_search_input(){
          this.search_input_show = false;
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        var offsetTop = this.$refs.abc.offsetHeight;
        console.log(offsetTop);
        if (scrollTop > offsetTop) {
            this.navBarFixed = true
        } else {
            this.navBarFixed = false
        }
      }
  }
}
</script>

<style lang="scss">
@import url("../../style/common.css");

.top{
    height: 65px;
    padding: 15px 0;
    .top_right{
        float: right;
        padding: 14px 0;
        li{
            margin-right: 25px;
        }
    }
    >li{
        width: 50%;
    }
    .el-icon-close,.el-icon-search{
        font-size: 1.4rem;
        cursor: pointer;  
    }
    .el-icon-close{
        position: absolute;
        top: 10px;
        right: -20px;
        color:#9c9c9c;
    }
    .el-icon-close:hover{
        color: #bbb;
    }
    .glyphicon-shopping-cart{
        font-size: 16px;
    }
    .search_icon{
        padding: 10px 4px 0 10px;
        float: left;
    }
    .search_input{
        width: 40%;
        position: relative;
        float: left;
    }
    @media screen and (max-width: 600px){
        .search_input{
            width: 65%;
        }
    }

    li.shopping_cart{
        position: relative;
    }
    .cart_box{
        width: 200px;
        height: auto;
        position: absolute;
        right: -5px;
        top: 28px;
        padding: 16px;
        z-index: 10;
        border: 1px solid #d8dce5;
        box-shadow: 0 0 10px 0 #d8dce5;
        display: none;
    }
    li.shopping_cart:hover .cart_box{
        display: block;
    }
    .cart_icon{
        cursor: pointer;
    }
    .logo{
        height: 120px;
        overflow: hidden;
    }
    .head_top{
        margin: 0 0 30px 0;
    }
}

.header_nav{
    background-color: #fff;
    .el-menu{
        padding: 0 22%;
    }
    .el-submenu .el-menu-item{
        text-align: left;
        padding: 0 20px;
    }   
    .el-menu-item{
        padding: 0 6%;
        font-size: 1.3rem;
    }
    .el-menu--horizontal .el-submenu>.el-menu{
        top: 60px;
    }
    .el-menu--horizontal{
        border:none;
    }
}
.nav_bar_fixed{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    box-shadow: 0 0 8px 2px #e0e0e0;
    z-index: 10;
    .fixed_menu{
        float: left;
        width: 90%;
    }
    .el-menu {
        padding: 0 15%;
    }
    
}
.fixed_logo{
    float: left;
    width: 10%;
    height: 60px;
    z-index: 100;
    padding: 8px 0 0 10px;
}
</style>