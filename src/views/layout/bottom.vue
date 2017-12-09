<template>
    <footer class="footer">
        <div class="erwei_code">
            <img src="../../../static/wechat.jpeg" width="100%" alt="">
        </div>
        <ul class="clearfix">
            <li><a href="javascript:;">关于我们</a></li>
            <li><a href="javascript:;">友情链接</a></li>
            <li><a href="javascript:;">联系我们</a></li>
        </ul>
        <div class="copy_right">
            <span>&copy;2017 北京北京北京北京北京北京北京北京</span>
            <span>All right reserved</span> 
        </div>
        <div class="back_top" v-if="back_top_show" @click="to_top">
            <i class="el-icon-upload2"></i>
        </div>

    </footer>
</template>

<script>
    export default{
        data(){
            return {
                back_top_show: false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                //console.log(scrollTop)
                if (scrollTop > 600) {
                    this.back_top_show = true
                } else {
                    this.back_top_show = false
                }
            },
            to_top(){
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>

<style lang="scss">
@import url("../../style/common.css");
.footer{
    .erwei_code{
        margin: 70px auto;
        width: 180px;
        height: 180px;
        border-radius: 25%;
        background-color: #fff;
        overflow: hidden;
    }
    ul{
        width: 50%;
        margin: 0 auto;
        li{
            width: 33.33%;
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            font-weight: 600;
        }
    }
    .copy_right{
        padding: 20px 0 40px 0;
        span{
            margin:0 30px;
            color:#b1b1b1;
            font-size: 13px;
        }
    }
    .back_top{
        position: fixed;
        bottom: 12%;
        right: 20px;
        width: 45px;
        height: 45px;
        line-height: 45px;
        background-color: #444444;
        text-align: center;
        font-size: 30px;
        color: #aaa;
        cursor:pointer;
    }
}

</style>

