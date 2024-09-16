<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import yinyang from "../../assets/icons/yinyang.svg"

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const modules = [Pagination, Autoplay];

const activeSlide = ref(0);
const onSlideChange = (swiper) => {
    activeSlide.value = swiper.realIndex;
};


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
const imgSlide = [
    {
        id: 0,
        url: "https://truyen.tangthuvien.vn/images/intro/ttv-translate-1.jpg",
        name: "TTV Translate",
    },
    {
        id: 1,
        url: "https://truyen.tangthuvien.vn/images/slide7.jpg",
        name: "Lâm Uyên Hành"
    },
    {
        id: 2,
        url: "https://truyen.tangthuvien.vn/images/slide9.jpg",
        name: "Vạn Cổ Tối Cường"
    },
    {
        id: 3,
        url: "https://truyen.tangthuvien.vn/images/slide8.jpg",
        name: "Quỷ Bí Chi Chủ"
    },
    {
        id: 4,
        url: "https://truyen.tangthuvien.vn/images/slide3.jpg",
        name: "Phàm Nhân Tu Tiên"
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
            swiper(:modules="modules" class="mySwiper swiper" :autoplay="{delay: 5000, disableOnInteraction: false,}" )
                swiper-slide(v-for="item in imgSlide" :key="item.id")
                    img(:src="item.url" alt="item.id" :id="item.id" )
            .nav-button
                a(v-for="item in imgSlide" :key="item.id" :href="`#${item.id}`") {{ item.name }}
            .top-user.flex.flex-row.justify-between
                .cover
                    img.user(src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png")
                    .flag#no1
                        p No.1
                        p Converter
                .cover
                    img.user(src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png")
                    .flag#no2
                        p No.1
                        p Đại gia
                .cover
                    img.user(src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png")
                    .flag#no3
                        p No.1
                        p Tiêu phí
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
    width 60%
    margin 0px 10px
    .swiper
        height 300px
        img
            width 100%
        .swiper-pagination
            display flex
            justify-content space-between
    .nav-button
        display flex
        justify-content space-between
        gap 0.5px
        
        a   
            flex 1 2 20%
            padding 10px 0px
            text-align center
            color white
            background rgba(0, 0, 0, 0.7)
            font-size 14px
    .top-user
        .cover
            background-image: url("https://truyen.tangthuvien.vn/images/cover2.jpg");
            background-size: cover
            background-position: center
            position relative
            width 33%
            height 130px
            object-fit cover
            overflow hidden
            .user
                width 80px
                height 80px
                border-radius 50%
                position absolute
                top 50%
                left 50%
                transform translate(-50%, -50%)
                object-fit cover
            .flag
                position absolute
                top 0
                right 0px
                transform rotate(45deg) translate(0px, -80px)
                display flex
                flex-direction column
                justify-content end
                align-items center
                height 100px
                width 100px
                color white
                padding 5px 10px
                font-size 14px
                font-weight bold
                border-radius 5px
                z-index 1
            #no1
                background red
            #no2
                background #327c86
            #no3
                background #a3af1e



.news
    flex 1 1 15%
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