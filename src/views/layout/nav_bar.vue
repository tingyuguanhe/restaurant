<template>
  <div class="layout_nav" ref="abc">
      <div class="head_top">  
        <ul class="top clearfix">
            <li>
                <div class="vertical_nav">
                    <i class="glyphicon glyphicon-menu-hamburger"></i>
                </div>
                
                <div class="pc_search">
                    <div class="search_icon" @click="show_search_input">
                        <i class="el-icon-search"></i>
                    </div> 
                    <div v-if="search_input_show" class="search_input">
                        <el-input v-model="search_input" placeholder="请输入内容"></el-input>
                        <i class="el-icon-close" @click="hide_search_input"></i>
                    </div>
                </div>
            </li>
            <li>
                <ul class="top_login f14 clearfix">
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
        <div class="app_search clearfix">
            <div class="search_icon" @click="show_search_input">
                <i class="el-icon-search"></i>
            </div> 
            <div v-if="search_input_show" class="search_input">
                <el-input v-model="search_input" placeholder="请输入内容"></el-input>
                <i class="el-icon-close" @click="hide_search_input"></i>
            </div>
        </div>
        <div class="position_left_nav">
            <div class="left_nav_box">
                <el-menu :default-active="activeIndex" class="el-menu-demo fixed_menu" default-active="#fff"
                active-text-color="#ff5900"
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
            </div>
        </div>
        <div class="logo">
            <img src="../../assets/logo.png" width="20%" alt="">
        </div>
      </div>
      <transition name="el-zoom-in-top">
        <header class="header_nav" :class="{'nav_bar_fixed': navBarFixed}">
            <!-- 置顶logo -->
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
            <!-- 置顶登录 -->
            <ul v-if="navBarFixed" class="top_login f14 clearfix">
                <li class="search_li">
                   
                    <i class="el-icon-search" @click="show_search_input"></i>
                    <div v-if="search_input_show" class="search_input">
                        <el-input v-model="search_input" placeholder="请输入内容"></el-input>
                        <i class="el-icon-close" @click="hide_search_input"></i>
                    </div>
                </li>
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
        search_input:'',
        search_input_show: false,
        navBarFixed: false,
        fixed_left_nav_show: false
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
          this.search_input = '';
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //console.log(scrollTop)
        var offsetTop = this.$refs.abc.offsetHeight;
        //console.log(offsetTop);
        if (scrollTop > offsetTop) {
            this.navBarFixed = true
        } else {
            this.navBarFixed = false
        }
      },
     
  }
}

$(function(){
    $('.vertical_nav').bind('click',function(){
        $('.position_left_nav').show();
    })
    
    $(document).bind("click",function(e){ 
        var target = $(e.target);
        if(target.closest(".position_left_nav").length == 1){ 
            $(".position_left_nav").hide(); 
        } 
    }) 
}) 

</script>

<style lang="scss">
@import url("../../style/common.css");
.vertical_nav {
    float: left;
    display: none;
    i{
        font-size: 1.4rem;
        padding: 10px 6px 10px 10px;
    } 
}

.position_left_nav{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    z-index: 100;
    width: 100%;
    background-color: transparent;
    display: none;
    .el-menu{
        border: none;
        text-align: left;
        background-color: #d6d6d6;
        
    }
    .left_nav_box{
        width: 50%;
        height: 100%;
        background-color: #d6d6d6;
    }
    
    li{
        float: none;
    }
}
.el-submenu .el-menu-item{
    min-width: 100%;
}
.top{
    height: auto;
    padding: 15px 0 0 0;
    
    >li{
        width: 50%;
    }
    
    
    .logo{
        height: 120px;
        overflow: hidden;
    }
    
}
.search_icon{
    padding: 10px 6px 10px 10px;
    float: left;
}

.search_input{
    width: 40%;
    position: relative;
    float: left;
}
.app_search {
    display: none;
    .search_input{
        width: 84%;
    }
}

.head_top{
    margin: 0 0 20px 0;
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
    
    
.top_login{
    float: right;
    li{
        margin-right: 25px;
        height: 40px;
        line-height: 40px;
    }
    li:last-child{
        margin-right: 15px; 
    }
}
li.shopping_cart{
        position: relative;
    }
    .cart_box{
        width: 200px;
        height: auto;
        position: absolute;
        right: -8px;
        top: 38px;
        padding: 10px 15px;
        z-index: 10;
        border: 1px solid #d8dce5;
        box-shadow: 0 0 10px 0 #d8dce5;
        border-radius: 2px;
        display: none;
        background-color: #fff;
    }
    li.shopping_cart:hover .cart_box{
        display: block;
    }
    .cart_icon{
        cursor: pointer;
    }

.header_nav{
    background-color: #fff;
    
    padding: 0;
    .el-menu--horizontal{
        min-width: 660px;
        width: 560px;
        margin: 0 auto;
        border:none;
    }
    .el-submenu .el-menu-item{
        text-align: left;
        padding: 0 20px;
        min-width: 100%;
    }   
    .el-menu-item{
        padding: 0 6%;
        font-size: 1.2rem;
    }
    .el-menu--horizontal .el-submenu>.el-menu{
        top: 60px;
    }
}
.nav_bar_fixed{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    box-shadow: 0 0 8px 2px #e0e0e0;
    z-index: 10;
    animation: show_nav_menu 1s linear;
    .fixed_menu{
        float: left;
        width: 70%;
    }
    .el-menu {
        padding: 0 7% 0 12%;
    }
    .top_login {
        margin: 0;
        li{
            height: 60px;
            line-height: 60px;
        }
    }
    .cart_box{
        top:50px;
    }
    .search_li{
        position: relative;
        .el-icon-close{
            position: absolute;
            top: 30px;
            right: 6px;
            color:#9c9c9c;
        }
    }
    .search_input{
        position: absolute;
        top: 60px;
        background-color: #fff;
        padding: 0 8px 0 12px;
        height: 72px;
        line-height: 72px;
        width: 240px;
        right: -10px;
        box-shadow: 0 1px 1px 0 #e0e0e0;
        .el-input{
            width: 88%;
            margin: 0 15px 0 0;
        }
    }
}
.el-carousel__container{
    min-height: 560px;
    height: 600px;
    max-height: 600px;
}
@keyframes show_nav_menu{
    0% { top: -60px; }
    50% { top: -10px; }
    100% { top: 0; }
}

.fixed_logo{
    float: left;
    width: 10%;
    height: 60px;
    z-index: 100;
    padding: 8px 0 0 10px;
}

@media screen and (max-width: 600px){
    .header_nav{
        display: none;
    }
    .el-carousel__container{
        min-height: 180px;
        height: 180px;
        max-height: 200px;
    }
    .vertical_nav{
        display: block;
    }
    .app_search{
        display: block;
        margin: 0 0 20px 0;
    }
    .pc_search{
        display: none;
    }
    .el-icon-close {
        position: absolute;
        top: 10px;
        right:-20px;
        color: #9c9c9c;
    }
    .head_top{
        .top{
            position: fixed;
            width: 100%;
            left: 0;
            top: 0;
            background: #fff;
            z-index: 100;
        }
    }
    .logo{
        display: none;
    }

}
</style>