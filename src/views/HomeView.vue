<script setup>
import HomeHeader from '@/components/Home/HomeHeader.vue';
import NewStory from '@/components/Home/NewStory.vue';
import { ref, computed } from 'vue';

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
    HomeHeader
    .slider-wrapper
        .slider
            img(:src="slides[currentSlide].url")
        .slider-nav
            button(v-for="(slide, index) in slides" @click="goToSlide(index)" :class="{ active: currentSlide === index }" ) &nbsp;
            
    .search-bar
        button(@click="toggleSearch")
            i.pi.pi-search
            div Tìm kiếm

    .nav
        RouterLink(to="/")
            .nav-item
                div icon
                div Thể loại
        RouterLink(to="/")
            .nav-item
                div icon
                div Thể loại
        RouterLink(to="/")
            .nav-item
                div icon
                div Thể loại
        RouterLink(to="/")
            .nav-item
                div icon
                div Thể loại
        RouterLink(to="/")
            .nav-item
                div icon
                div Thể loại

    img.ads(src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg")

    NewStory

</template>

<style lang="stylus" scoped>
@import '../assets/main.styl'

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

.ads
    width 100%
    margin 0 auto
    padding 10px
    object-fit cover
    display block



</style>
