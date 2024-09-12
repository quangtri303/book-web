<script setup>
import { RouterLink } from 'vue-router';
import yinyang from "../../assets/icons/yinyang.svg"
const category = [
    {
        id: 1,
        name: "Tiên Hiệp",
        amount: 12345,
        url : "",
        icon: yinyang
    },
    {
        id: 2,
        name: "Huyền Huyễn",
        amount: 123145,
        url : "",
        icon: yinyang
    },
    {
        id: 3,
        name: "Huyền Huyễn",
        amount: 1231245,
        url : "",
        icon: yinyang
    },
    {
        id: 4,
        name: "Huyền Huyễn",
        amount: 12123345,
        url : "",
        icon: yinyang
    },
    {
        id: 5,
        name: "Huyền Huyễn",
        amount: 12123345,
        url : "",
        icon: yinyang
    },
    {
        id: 6,
        name: "Huyền Huyễn",
        amount: 12123345,
        url : "",
        icon: yinyang
    },


]
const news = [
    {
        id: 1,
        title: "Đăng ký convert",
    },
    {
        id: 2,
        title: "Bảng lương convert",
    },
    {
        id: 3,
        title: "Kiếm tiền với tàng thư viện",
    },
    {
        id: 4,
        title: "Các đơn vị tiền tệ",
    }
]
</script>

<template lang="pug">
.banner
    .main
        .category
            .category-item(v-for="item in category" :key="item.id")
                RouterLink(to="/")
                    .category-icon
                        img(:src="item.icon" alt="icon")
                    .category-name
                        p {{ item.name }}
                        p {{ item.amount }}
        .box
            p slider
        .news
            .newstitle Tin tức
            ul.newsitem(v-for="item in news" :key="item.id")
                RouterLink(to="/") {{ item.title }}
                

</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.banner
    width 100%
    display flex
    justify-content center
    .main
        display flex
        flex-direction: row
        width 1100px

.category
    flex 1 1 25%
    color white
    display grid
    grid-template-columns 1fr 1fr
    grid-auto-rows: 60px



.category-item a
    height 100%
    hover-text(black,red)
    display flex
    flex-direction: row
    justify-content: start
    align-items: center
    gap 10px


.category-icon
    width 24px
    height 24px

.category-name
    display: flex
    flex-direction: column

.box
    flex 1 1 55%
    background black
    margin 0px 10px

.news
    flex 1 1 20%
    display flex
    flex-direction: column
    gap 15px
    margin-top 10px
    border 1px solid #e6e6e6

.newstitle
    width 100%
    text-align: center
    font-weight: 700
    font-size 16px

.newsitem
    color #666
    display flex
    flex-direction: column
    gap 10px

.newsitem a
    position: relative
    padding-left: 20px
    list-style: none
    hover-text(black,red)

.newsitem a::before
    content: '•'
    position: absolute
    left: 0
    color: #666
    font-size: 20px
    line-height: 1
    top: 0
</style>