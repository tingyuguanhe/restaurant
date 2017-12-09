<template>
  <div class="list main_content">
      <el-row>
          <el-col :span="4">
                <div class="breadcrumb breadcrumb_source" v-if="!!$route.meta.breadcrumbs">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item v-for="(breadcrumb,index) in $route.meta.breadcrumbs" :to="breadcrumb.href" :key="index">
                            {{breadcrumb.name}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
          </el-col>
          <el-col :span="19" :offset="1">
              <el-row class="filter_items">
                  <el-col :span="1" class="filter_txt">
                    <div>排序：</div>
                  </el-col>
                  <el-col class="filter_bg" :span="1">
                      <div @click="sortBy('complex')">
                          <span :class="{'active':complex}">综合</span>
                      </div>
                  </el-col>
                  <el-col class="filter_bg" :span="1">
                    <div class="has_icon" @click="sortBy('sale')">
                        <span :class="{'active': sale}">销量</span>
                        <i class="i_first el-icon-caret-top" :class="{'sale_active':sale && !sale_active}"></i> 
                        <i class="el-icon-caret-bottom" :class="{'sale_active':sale && sale_active}"></i> 
                    </div>
                    
                  </el-col>
                  <el-col class="filter_bg" :span="1">
                    <div class="has_icon" @click="sortBy('price')">
                        <span :class="{'active': price}">价格</span> 
                        <i class="i_first el-icon-caret-top" :class="{'price_active':price && price_active == true}"></i> 
                        <i class="el-icon-caret-bottom" :class="{'price_active':price && price_active == false}"></i> 
                    </div>   
                   
                  </el-col>
                  
                  <el-col :span="3">
                    <el-checkbox v-model="checked">仅显示未售完</el-checkbox>
                  </el-col>
                  <el-col class="product_num" :span="14">
                    <div class="pull-right">
                        共 <span>{{cakeList.length}}</span> 个商品
                    </div>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
      
    <div class="">
        <el-row>
            <el-col :span="4">
                <h5>类别：</h5>
                <el-menu :default-active="default_active_menu" class="el-menu-vertical-demo search_menu" 
                active-text-color="#ff5900" @select="handleSelect"
                @open="handleOpen" @close="handleClose">

                    <template v-for="(item,index) in list_menu" >
                        <template  v-if="item.children.length == 0">
                            <el-menu-item :index="item.index" :key="index">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </template>
                        <template v-else>
                            <el-submenu :index="item.index">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{item.name}}</span>
                                </template>
                                <el-menu-item-group v-for="(child,indx) in item.children">                     
                                    <el-menu-item :index="child.index" :key="index">{{child.name}}</el-menu-item>                                    
                                </el-menu-item-group>
                            </el-submenu>
                        </template>    
                    </template>                    
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="1">
                <el-row class="clearfix">
                        <el-col :span="8" v-for="item in cakeList" :key="item.id">
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
                        </el-col>
                    </el-row> 
            </el-col>
        </el-row>
    </div>
    
  </div>
</template>
<script>
import {staticBannerImgPath,staticFoodImgPath} from '@/config'

export default {
  data(){
      return {
          checked: false,
          sale: false,
          sale_active: '',
          price: false,
          price_active: '',
          complex:false,
          list_menu:[
              {
                  name:'精品糕点',
                  index:'cake',
                  type:'cake',
                  id:'1',
                  children:[
                    //   {
                    //       name:'奶油慕斯蛋糕',
                    //       index:'1',
                    //       type:'1',
                    //       id:'1',
                    //       title:'今日特价'
                    //   },
                    //   {
                    //       name:'水果蛋糕',
                    //       index:'2',
                    //       type:'2',
                    //       id:'2',
                    //       title:'今日特价'
                    //   },
                    //   {
                    //       name:'马卡龙',
                    //       index:'3',
                    //       type:'3',
                    //       id:'3'
                    //   }
                  ]
              },
              {
                  name:'饮料',
                  index:'drink',
                  type:'drink',
                  id:'2',
                  children:[]
              },
              {
                  name:'超值套餐',
                  index:'set_meal',
                  type:'set_meal',
                  id:'3',
                  children:[]
              }
          ],
          default_active_menu:'',
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
      }
  },
  mounted () {
    this.default_active_menu = this.$route.params.type;
  },
  methods: {
    handleOpen(key, keyPath) {
    console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    console.log(key, keyPath);
    },
    handleSelect(key){
        console.log(key);
    },
    sortBy(type){
        if(type == "sale"){
            this.sale = true;
            this.sale_active = !this.sale_active;          
        }else if(type == 'price'){
            this.price = true;
            this.price_active = !this.price_active;
        }else if(type == 'complex'){
            this.complex = true;
        }
    }
  }
}
</script>


<style lang="scss" scoped>
@import url('../style/common.css');

.breadcrumb{
    background-color:transparent;
}

h5{
    text-align:left;
    padding: 16px;
    background-color: #fff;
    margin: 0;
    border-bottom: 1px solid #e6e6e6;
}
.list{
    background-color: #f2f2f2;
    min-height: 200px;
}
.main_content{
    padding:20px 4%;
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
.el-submenu{
    border:none;
}
.el-submenu .el-menu-item{
    min-width: 190px;
}

.el-col-8 {
    width: 32.33%;
    margin: 0 1% 1% 0;
}
.img_item{
    overflow: hidden;
    padding: 40px;
    background-color: #fff;  
}
.img_box {
    cursor: pointer;
    img:hover{
        opacity: 0.6;
    }
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
        font-size: 1.5rem;
    }
    
}
.filter_items {
    color:#777;
    font-size:14px;
    >div.el-col-1{
        width:6.4%;
            
            position:relative;
        >div{
            padding:5px 0;
            i{
                position: absolute;
                right: 10px;
                top:10px;
                color:#ccc;
            }
            i.i_first{
                top:4px;
            } 
            i.price_active,i.sale_active{
                color:#ff5900;
            }
        }
        div.has_icon{
            text-align:left;
            padding: 5px 14px;
        }
        
        
    }
    
    
    .filter_bg{
        background-color:#fff;
        margin-right:10px;
        cursor:pointer;
        span.active{
            color:#ff5900;
        }
    }
    
    div.filter_txt{
        background-color:transparent;
        text-align:left;
    }

    label,.product_num{
        padding:8px 0 0 0;
        color:#7b7b7b;
        span{
            color:#ff5900;
        }
    }
  
}


</style>

