<template>
  <div class="main_app">
    <nav-bar></nav-bar>
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

