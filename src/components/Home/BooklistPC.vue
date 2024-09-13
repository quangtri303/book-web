<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const modules = [EffectCoverflow, Pagination];

const imgSlide = [
    {
        id: 1,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/f760a5986c48377f5dc2d603654c6adad629b21add67f80bd2a79a0d7a82b289.jpg",
        name: "Quỷ Tam Quốc",
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id: 2,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/74f87afe38a5087246fdfd5c39a2c5a2c9de8bb7763a356487758188624ee522.jpg",
        name: "Cố Chướng Ô Thác Bang",
        desc: "Cơ thể giả kim loại cải tiến, bạn gái AI, trong đầu mạng lưới thần kinh,..."
    },
    {
        id: 3,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/788e84598016bfafbdb38e25f8e28bfe098d6b5e144763b6457c4fb6efe1a6e6.jpg",
        name: "Mỹ Ngu Chi Hoa Bình Ảnh Đế",
        desc: "Vâng, ta chính là bình hoa!"
    },
    {
        id: 4,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/361a521abbd4921911cf20960bbe5c88d0c079a4bf8813965ae98f22db04b7a8.jpg",
        name: "Thần Thoại Đại Lục",
        desc: "Thần thoại, huyền huyễn, võ hiệp, kiếm hiệp, tu chân, dị giới, dị năng,..."
    },
    {
        id: 5,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        name: "Tiên Nhân Biến Mất Về Sau",
        desc: "Trên trời có thần, dưới đất có người, thế gian không có tiên. Thân là..."
    }
]
const booklist = [
    {
        id:1,
        name: "Quỷ Tam Quốc",
        chapter: 1123,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id:2,
        name: "Quỷ Tam Quốc",
        chapter: 1321,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id:3,
        name: "Quỷ Tam Quốc",
        chapter: 1123,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id:4,
        name: "Quỷ Tam Quốc",
        chapter: 112,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id:5,
        name: "Quỷ Tam Quốc",
        chapter: 142,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id:6,
        name: "Quỷ Tam Quốc",
        chapter: 142,
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
]

const activeSlide = ref(0);
const onSlideChange = (swiper) => {
    activeSlide.value = swiper.realIndex;
};

</script>

<template lang="pug">
.main
    .just-watched
        p.title Truyện mới xem
        hr/
        .list
            .item(v-for="item in booklist" :key="item.id")
                RouterLink(to="/") {{ item.name }}
                p.chap Chapter {{ item.chapter }}
    .featured
        .title Biên tập viên đề cử
        .showcase.flex.flex-row
            swiper(:effect="'coverflow'" :grabCursor="true" :slideToClickedSlide="true" loop :centeredSlides="true" :slidesPerView="'3'" :coverflowEffect="{rotate: 0,stretch: 40, depth: 150, modifier: 1, slideShadows: 0 }" :pagination="{ clickable: true, el: '.swiper-pagination' }"  :modules="modules" @slideChange="onSlideChange" class="mySwiper swiper")
                swiper-slide(v-for="item in imgSlide" :key="item.id")
                    img.slide-img(:src="item.url")
                .swiper-pagination
            .book-info
                b.title {{ imgSlide[activeSlide].name }} 
                p.desc {{ imgSlide[activeSlide].desc }}
                button Đọc truyện
        .book-grid
            .book-item(v-for="item in booklist" :key="item.id")
                RouterLink(to="/").title {{ item.name }}
                p.chap <b>{{ item.chapter }}</b> <i>chương</i>
                p.desc <i>{{ item.desc }}</i>

    .following
        p.title Đang theo dõi
        hr/
        .list
            .item(v-for="item in booklist" :key="item.id")
                RouterLink(to="/") {{ item.name }}
                p.chap Chapter {{ item.chapter }}
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'
.main
    width 100%
    display flex
    flex-direction row
    gap 30px
    justify-content center
    padding 0px 20px
    margin 20px 0px

.just-watched, .following
    display flex
    flex-direction column
    width 15%
    hr
        border 1px solid #e0e0e0
        margin 0px 0px 10px
    .list
        display flex
        flex-direction column
        gap 10px
        .item
            display flex
            flex-direction row
            justify-content space-between
            a 
                hover-text(black,red)
        .chap
            color #b3b3b3
            font-size 12px
.title
    font-size 18px
    line-height 25px
    padding 0px 0px 4px

.featured
    display flex
    flex-direction column
    width 48%
    .carousel
        width 100%
        height 150px
        background black
    .book-grid
        display grid
        grid-template-columns 1fr 1fr 1fr
        .book-item
            padding 15px 0px
            a
                hover-text(black,red)
            .chap
                color red
                font-size 12px
                b
                    font-size 16px
            .desc
                color #666

.showcase
    height 170px

.swiper
    width 300px
    height 100%
    flex-basis 40%

.slide-img
    width 100%
    height 80%
    object-fit cover
    box-shadow: none

.swiper-pagination
    display flex
    justify-content center
    color red

.mySwiper
    --swiper-pagination-color red
    --swiper-pagination-bullet-inactive-color #666

.book-info
    flex-basis 60%
    display flex
    flex-direction column
    gap 15px
    padding 10px
    .desc
        color #666
        font-size 14px
    button
        background red
        border 1px solid red
        border-radius: 15px
        color white
        width 100px
        height 30px

</style>