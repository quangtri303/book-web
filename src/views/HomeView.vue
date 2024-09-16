<script setup>
import { ref, computed } from 'vue';
import HomeHeader from '@/components/Home/HomeHeader.vue';
import NewStory from '@/components/Home/NewStory.vue';
import ListStory from '@/components/Home/ListStory.vue';
import HomePC from '@/components/Home/HomePC.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const modules = [Pagination, Autoplay];
const slides = [
    {
        id: "slide-1",
        url: "https://ngontinh.tangthuvien.vn/images/ngontinh1b.jpg"
    },
    {
        id: "slide-2",
        url: "https://truyen.tangthuvien.vn/images/slide9.jpg"
    },
    {
        id: "slide-3",
        url: "https://ngontinh.tangthuvien.vn/images/ngontinh2b.jpg"
    },

];

function toggleSearch() {
    console.log('toggle search');
}

const currentSlide = ref(0);
function goToSlide(index) {
    currentSlide.value = index;
}




</script>

<template lang="pug">
    .desktop
        HomePC

    div.main.mobile
        HomeHeader
        .slider-wrapper
            swiper(
                :modules="modules",
                :autoplay="{ delay: 5000 }",
                :onSlideChange="onSlideChange",
                :onSwiper="onSwiper",
                :slidesPerView="1",
                :spaceBetween="10",
                :pagination="{ clickable: true }"
                v-model:swiper="swiper"
                class="mySwiper swiper"
            )
                SwiperSlide(v-for="(slide, index) in slides" :key="slide.id")
                    img(:src="slide.url" alt="Slide")
                
        .search-bar
            button(@click="toggleSearch")
                i.pi.pi-search
                div Tìm kiếm

        .nav
            RouterLink(to="/")
                .nav-item
                    img(src="../assets/images/category.png" alt="Category")
                    div Thể loại
            RouterLink(to="/")
                .nav-item
                    img(src="../assets/images/rank.png" alt="Rank")
                    div Xếp hạng
            RouterLink(to="/")
                .nav-item
                    img(src="../assets/images/filter.png" alt="Filter")
                    div Bộ lọc
            RouterLink(to="/")
                .nav-item
                    img(src="../assets/images/top.png" alt="Top User")
                    div Top User
            RouterLink(to="/")
                .nav-item
                    img(src="../assets/images/review.png" alt="Review")
                    div Review

        img.ads(src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg" alt="Banner app")
        //- New and popular
        NewStory 

        //- De cu + hoan thanh
        ListStory

        .bottom-nav
            RouterLink 
                div iOS
            RouterLink 
                div Android
            RouterLink 
                div PC
            RouterLink 
                div Nội quy

        button.dl-btn 
            img(src="../assets/images/ttvappicon.png" alt="TTV app icon")
            div Tải app TTV để sử dụng đầy đủ chức năng
</template>

<style lang="stylus" scoped>
@import '../assets/main.styl'

.desktop
  display none

.mobile
  display block

.main
    position relative

img
    width 100%
    object-fit cover

.slider-wrapper
    position relative
    max-width: 40rem
    margin 0 auto
    width 100%
    padding 10px

.slider-nav
    position absolute
    left 50%
    transform: translateX(-50%)
    bottom 15px
    color red
    display flex
    gap 10px
    justify-content center
    margin-top 10px

.slider-nav button 
    width 8px
    height 8px
    border-radius 50%
    background-color #869791
    &:hover
        background-color purple
    &.active
        background-color red

.search-bar
    background red
    margin 0 auto
    width 100%

.search-bar button
    display flex
    width 100%
    gap 20px
    justify-content center
    background-color white
    border 1px solid white
    border-radius 4px
    color #555
    font-size 13px
    line-height 18px
    padding 5px 12px
    &:hover
        color teal

.nav
    display flex
    flex-direction: row
    justify-content: space-between
    padding 0px 10px
    
.nav-item
    display: flex
    flex-direction: column
    align-items: center
    padding 15px 0px
    gap 10px
    color black
    &:hover
        color #23527c

.nav-item img
    width 30px
    height 30px

.ads
    width 90%
    margin 0 auto
    padding 10px
    object-fit cover
    display block

.bottom-nav
    display: flex
    flex-direction: row
    margin 10px 0px
    height: 48px
    justify-content: space-between

.bottom-nav a
    text-align: center
    width 100%
    padding 0px 12px

.dl-btn
    position sticky
    display flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap 10px
    bottom 10px
    background-color teal
    color white
    width 90%
    height: 48px
    margin 0 20px
    border-radius: 30px
    font-size 14px

.dl-btn img
    width 30px
    height 30px

.mySwiper
    --swiper-pagination-color red
    --swiper-pagination-bullet-inactive-color #666

@media (min-width: 1100px)
  .desktop
    display block

  .mobile
    display none
</style>
