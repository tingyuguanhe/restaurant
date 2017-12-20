<template>
  <div class="home_box">
      <section>
            <!--轮播图-->
            <template>
                <el-carousel :interval="4000" :autoplay="false" trigger="click">
                    <el-carousel-item v-for="(item, index) in banners" :key="index">
                        <a :href="item.url">
                            <img :src="item.img" alt="img" ref="img" width="100%">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </template>
            <div class="content"> 
                <img src="../../static/title/title1.jpg" alt="" width="100%">
                <div class="food_item" v-for="item in types" :key="item.id">
                    <h3>CAKE 糕点</h3>
                    <div class="more_link"><a href="javascript:;" @click="click_more(item.id)">MORE+</a></div>
                    <ul class="clearfix">
                        <li v-for="food in item.shops" :key="food.id">
                            <div class="img_item">
                                <div class="img_box">                             
                                    <img :src="food.img" alt="美食图片" width="100%">
                                    <div class="food_info">
                                        <div class="food_introduce">
                                            <div class="food_name">{{food.name}}</div>
                                            <p>{{food.name}}</p>
                                        </div>
                                        <div class="price">¥{{food.price}}</div>
                                    </div> 
                                </div>
                            </div>
                        </li>
                    </ul> 
                </div>
            </div>
      </section>
  </div>
</template>
<script>
import {staticBannerImgPath,staticFoodImgPath} from '@/config'
import {indexItem} from '@/api/api'
export default {
  data() {
      return {
        banners:[],
        types:[],
        picList:[
            {img:staticBannerImgPath + "1.jpeg", altstring:"banner1",id:"1"},
            {img:staticBannerImgPath + "2.jpeg",altstring:"banner2",id:"2"},
            {img:staticBannerImgPath + "3.jpeg",altstring:"banner3",id:"3"}
        ],
      }
    },
    created () {
        this.get_items();
    },
    methods: {
      click_more(id){
          this.$router.push({name:'list', params: { type_id: id}})
      },
      get_items(){
          indexItem().then(
              (resData) => {
                  if(resData.status == 'ok'){
                      var Data = resData.data;
                      this.banners = Data.banners;
                      this.types = Data.types;
                     
                  }else{
                      console.log('获取数据失败');
                  }
                  
              }
          )
      }

    }
}
</script>


<style lang="scss">
@import url("../style/common.css");

h3{
    font-size: 1.3rem;
}
.content{
    background-color: #f2f2f2;
    padding:0 0 100px 0;
    .img_item{
        overflow: hidden;
        padding: 10%;
        background-color: #fff;  
    }
    .img_box {
        cursor: pointer;
        img:hover{
            opacity: 0.6;
        }
        
    }

    .food_item{
        padding: 0 6%;
        li{
            width: 32.333%;
            margin: 0 1% 1% 0;
        }
        .food_name{
            padding: 15px 0 0 0;
            font-size: 1.1rem;
            font-weight: 600;
        }
        .food_name:hover{
            color:#0048ff;
        }
        p{
            font-size: 1rem;
            margin: 6px 0;
            color:#999;
        }
        .price{
            color: #ff5900;
            font-size: 1.2rem;
        }
    }
    .more_link{
        text-align: right;
        margin: 10px 20px;
    }
   
   @media screen and (max-width: 600px){
        
        .food_item {
            li{
                width: 100%;
            }
       }
       
   }
}


</style>

