<script setup>
import { RouterLink } from 'vue-router';

const booklist = [
    {
        id:1,
        name: "Quỷ Tam Quốc",
        chapter: 1
    },
    {
        id:2,
        name: "Quỷ Tam Quốc",
        chapter: 1
    },
    {
        id:3,
        name: "Quỷ Tam Quốc",
        chapter: 1
    },
    {
        id:4,
        name: "Quỷ Tam Quốc",
        chapter: 1
    },
    {
        id:5,
        name: "Quỷ Tam Quốc",
        chapter: 1
    },
]
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
        .carousel
        .book-grid

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
    justify-content center
    padding 0px 30px
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
</style>