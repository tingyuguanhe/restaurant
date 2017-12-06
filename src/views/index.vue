<template>
  <div>
      <ul class="top clearfix">
            <li>
                <div class="search_icon pull-left" @click="show_search_input">
                    <i class="el-icon-search"></i>
                </div> 
                <div v-if="search_input_show" class="search_input pull-left">
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
          <img src="../assets/logo.png" width="20%" alt="">
      </div>
      <header class="header_nav">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#ff5900"
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
      <section>
            <!--轮播图-->
            <template>
                <el-carousel :interval="4000" :autoplay="false" trigger="click" height="600px">
                    <el-carousel-item v-for="(item, key, index) in picList" :key="index">
                        <img :src="item.img" :alt="item.altstring" ref="img" width="100%">
                    </el-carousel-item>
                </el-carousel>
            </template>
            <div class="content"> 
               
                <img src="../../static/title/title1.jpg" alt="" width="100%">
                <div class="food_item">
                    <div class="more_link"><a href="javascript:;">MORE+</a></div>
                    <ul class="clearfix">
                        <li>
                            <div class="img_item">
                                <img src="../../static/img/food.jpg" width="100%" height="250px" alt="">
                                <p>精品皮皮虾</p>
                                <div class="price">¥39.9</div>
                            </div>
                        </li>
                        <li>
                            <div class="img_item">
                                <img src="../../static/img/cake.jpg" width="100%" height="250px" alt="">
                                <p>现做水果慕斯蛋糕</p>
                                <div class="price">¥59.9</div>
                            </div>
                        </li>
                        <li :span="8">
                            <div class="img_item">
                                <img src="../../static/img/wine.jpg" width="100%" height="250px" alt="">
                                <p>秘制果味鸡尾酒</p>
                                <div class="price">¥29.9</div>
                            </div>
                        </li>
                    </ul> 
                </div>
            </div>
      </section>
      
  </div>
</template>
<script>
import {STATIC_IMAGEPATH} from '@/config'
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input5:'',
        search_input_show: false,
        picList:[
            {img:STATIC_IMAGEPATH + "1.jpeg", altstring:"banner1",id:"1"},
            {img:STATIC_IMAGEPATH + "2.jpeg",altstring:"banner2",id:"2"},
            {img:STATIC_IMAGEPATH + "3.jpeg",altstring:"banner3",id:"3"}
        ],
        
      };
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
      }

    }
}
</script>


<style lang="scss">
@import url("../style/common.css");

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
    }
    .search_input{
        width: 40%;
        position: relative;
    
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
}

.header_nav{
    padding: 30px 0 0 0;
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

.content{
    background-color: #f2f2f2;
    padding:0 0 100px 0;
    .img_item{
        overflow: hidden;
        padding: 30px;
        background-color: #fff;
        
    }
    .food_item{
        padding: 0 6%;
        li{
            width: 32.333%;
            margin: 0 1% 0 0;
        }
        p{
            font-size: 1.2rem;
            margin: 20px 0 6px 0;
        }
        .price{
            color: #ff5900;
            font-size: 1.5rem;
        }
    }
    .more_link{
        text-align: right;
        margin: 10px 20px;
    }
   
}
</style>

