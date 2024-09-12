<script setup>
import { RouterLink } from 'vue-router';
</script>

<template lang="pug">

.navbar
    div
        .category
            i.pi.pi-bars
            p Thể loại
        .nav-item
            RouterLink(to="/") Diễn đàn
            RouterLink(to="/") Bảng xếp hạng
            RouterLink(to="/") Bộ lọc 
            RouterLink(to="/") Review
            RouterLink(to="/") Cửa hàng
        .appdl
            i.pi.pi-mobile
            p Tải app
    
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.navbar
    width 100%
    background teal
    margin-top 16px
    height: 40px
    display: flex
    justify-content: center
    align-items: center

.navbar div
    display: flex
    width 1100px
    height 100%

.category
    flex 1 0.5 25%
    background #077c86
    color white
    display: flex
    justify-content: start
    align-items: center
    i 
        margin 0px 10px 0px 18px

.nav-item
    flex 1 1 60%
    background white
    margin 0px 10px
    a
        hover-bg(teal,#077c86)
        display: flex
        justify-content: center
        align-items: center
        flex-grow 2
        color white

.appdl
    flex 1 1 15%
    display: flex
    gap 10px
    justify-content: end
    align-items: center
    hover-text(white,#ffeea8)
</style>