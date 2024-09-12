<script setup>
import { RouterLink } from 'vue-router';

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

</style>