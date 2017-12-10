<template>
  <div class="home">
      <section>
            <!--轮播图-->
            <template>
                <el-carousel :interval="4000" :autoplay="false" trigger="click">
                    <el-carousel-item v-for="(item, key, index) in picList" :key="index">
                        <img :src="item.img" :alt="item.altstring" ref="img" width="100%">
                    </el-carousel-item>
                </el-carousel>
            </template>
            <div class="content"> 
               
                <img src="../../static/title/title1.jpg" alt="" width="100%">
                <div class="food_item">
                    <h3>CAKE 糕点</h3>
                    <div class="more_link"><a href="javascript:;" @click="click_more('cake')">MORE+</a></div>
                    <ul class="clearfix">
                        <li v-for="item in cakeList" :key="item.id">
                            <div class="img_item">
                                <div class="img_box">                             
                                    <img :src="item.img" :alt="item.altstring" width="100%" alt="">
                                    <div class="food_info">
                                        <div class="food_introduce">
                                            <div class="food_name">{{item.name}}</div>
                                            <p>{{item.text}}</p>
                                        </div>
                                        <div class="price">¥{{item.price}}</div>
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

export default {
  data() {
      return {
        
        picList:[
            {img:staticBannerImgPath + "1.jpeg", altstring:"banner1",id:"1"},
            {img:staticBannerImgPath + "2.jpeg",altstring:"banner2",id:"2"},
            {img:staticBannerImgPath + "3.jpeg",altstring:"banner3",id:"3"}
        ],
        cakeList:[
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/1.jpg",
                altstring:'精品皮皮虾',
                id: 1,
                text:'来自澳洲的皮皮虾',
                price:'69.9'
            },
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/2.jpg",
                altstring:'精品皮皮虾',
                id: 2,
                text:'来自澳洲的皮皮虾',
                price:'39.9'
            },
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/3.jpg",
                altstring:'精品皮皮虾',
                id: 3,
                text:'来自澳洲的皮皮虾',
                price:'59.9'
            },
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/4.jpg",
                altstring:'精品皮皮虾',
                id: 4,
                text:'来自澳洲的皮皮虾',
                price:'59.9'
            },
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/5.jpg",
                altstring:'精品皮皮虾',
                id: 5,
                text:'来自澳洲的皮皮虾',
                price:'59.9'
            },
            {
                name:'精品皮皮虾',
                img:staticFoodImgPath + "cake/6.jpg",
                altstring:'精品皮皮虾',
                id: 6,
                text:'来自澳洲的皮皮虾',
                price:'59.9'
            }

        ]
        
      };
    },
    components: {
        
    },
    methods: {
      
    //   view_detail(id){
    //       console.log(id);
    //       this.$router.push({name:'detail', params: { id: id}})
    //   },
      click_more(type){
          this.$router.push({name:'list', params: { type: type}})
      }

    }
}
</script>


<style lang="scss">
@import url("../style/common.css");
h3{
    font-size: 1.2rem;
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
   
}


</style>

