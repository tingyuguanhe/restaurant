<template>
  <div class="list">
      <div class="app_list_menu">
        <i class="el-icon-arrow-left pull-left" @click="go_history"></i>
        <el-menu :default-active="default_active_menu" mode="horizontal" class="pull-left el-menu-demo search_menu" 
                    active-text-color="#ff5900" @select="handleSelect"
                    @open="handleOpen" @close="handleClose">
                <template v-for="item in types">              
                    <el-menu-item :index="item.id.toString()" :key="item.id">
                        <template slot="title">
                            <span>{{item.name}}</span>
                        </template>         
                    </el-menu-item>     
                </template>                    
            </el-menu>
        </div>
      <div class="main_content">
      <!-- <div class="list_filter_ul clearfix">
          
              <el-row class="filter_items">
                  <el-col class="filter_bg" :span="2">
                      <div @click="sortBy('complex')">
                          <span :class="{'active':complex}">综合</span>
                      </div>
                  </el-col>
                  <el-col class="filter_bg" :span="2">
                    <div class="has_icon" @click="sortBy('sale')">
                        <span :class="{'active': sale}">销量</span>
                        <i class="i_first el-icon-caret-top" :class="{'sale_active':sale && !sale_active}"></i> 
                        <i class="el-icon-caret-bottom" :class="{'sale_active':sale && sale_active}"></i> 
                    </div>
                    
                  </el-col>
                  <el-col class="filter_bg" :span="2">
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
         
      </div> -->
      
    <div class="pc_list">
        <el-row>
            <el-col class="pc_list_menu" :span="4">
                <h5>类别：</h5>
                <el-menu :default-active="default_active_menu" class="el-menu-vertical-demo search_menu" 
                active-text-color="#ff5900" @select="handleSelect"
                @open="handleOpen" @close="handleClose">
                    <template v-for="item in types">                      
                        <el-menu-item :index="item.id.toString()" :key="item.id">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{item.name}}</span>
                            </template>                           
                        </el-menu-item>                      
                    </template>                    
                </el-menu>
            </el-col>
            <el-col :span="19" :offset="1">
                <el-row class="clearfix">
                    <el-col :span="8" v-for="item in item_shops" :key="item.id">
                        <div class="img_item">
                            <div class="img_box">  
                                <a :href="item.url">                             
                                    <img :src="item.img" alt="图片" width="100%">
                                    <div class="food_info">
                                        <div class="food_introduce">
                                            <div class="food_name">{{item.name}}</div>
                                            <p>{{item.name}}</p>
                                        </div>
                                        <div class="price">¥{{item.price}}</div>
                                    </div> 
                                </a> 
                            </div>
                        </div>
                    </el-col>               
                </el-row> 
            </el-col>
        </el-row>
    </div>
    </div>
  </div>
</template>
<script>
import {staticBannerImgPath,staticFoodImgPath} from '@/config'
import {listItem} from '@/api/api'
export default {
  data(){
      return {
          checked: false,
          sale: false,
          sale_active: '',
          price: false,
          price_active: '',
          complex:false,
          default_active_menu:'1',
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

        ],
        active_menu_id:'',
        item_shops:[],
        types:[]

      }
  },
  created(){
    this.default_active_menu = this.$route.params.type_id.toString();
    this.get_list_items();
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    handleSelect(key){
        
        this.default_active_menu = key;
        this.get_list_items();
    },
    get_list_items(){
        var param = {
            id: this.default_active_menu
        }
        listItem(param).then(
            (resData) => {
                if(resData && resData.status == 'ok'){
                    var Data = resData.data;
                    this.active_menu_id = Data.active.id;
                    this.item_shops = Data.shops;
                    this.types = Data.types;
                  
                }else{
                    console.log('获取列表失败');
                }
                
            }
        )
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
    },
    go_history(){
        window.history.go(-1);
    }
  }
}
</script>


<style lang="scss" scoped>
@import url('../style/common.css');


a:hover{
    text-decoration: none;
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
.pc_list_menu{
    .search_menu{
        border: none;
        li{
            width:100%;
            text-align: left;
        }
    }
 
}
   
.el-menu-item-group__title{
    color:#f600ff;
    font-weight: 700;
}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
    background-color: transparent;
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
    padding: 10%;
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
        font-size: 1.2rem;
    }
    
}
.filter_items {
    color:#777;
    font-size:14px;
    >div{
        // width:10%;
            
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

    label,.product_num{
        padding:8px 0 0 0;
        color:#7b7b7b;
        span{
            color:#ff5900;
        }
    }
  
}
.app_list_menu{
    display: none;
}
@media screen and (max-width:600px){
    .main_content{
        margin: 70px 0 0 0;
    }
    .el-col-2{
        width: 16%;
    }
    .filter_items > div{
        div.has_icon{
            padding: 5px 8px;
            i{
                right:5px;
            }
        }
       
        
    }
    .app_list_menu{
        display: block;
        margin: 0 0 15px 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10;
        .el-icon-arrow-left{
            margin: 20px 10px 0 10px;
            font-size: 20px;

        }
    }
    
    .pc_list_menu{
        display: none;
    }
    .el-col-19{
        width:100%;
    }
   .el-col-offset-1{
       margin-left: 0; 
   }
   .el-menu{
       border: none;
   }
   
}

</style>

