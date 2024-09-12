<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const ranklist = [
    {
        id: 1,
        name: "Đề cử",
        stat: "Đề cử"
    },
    {
        id: 2,
        name: "Xem nhiều",
        stat: "Lượt xem"
    },
    {
        id: 3,
        name: "Yêu thích",
        stat: "Lượt thích"
    },
    {
        id: 4,
        name: "Theo dõi nhiều",
        stat: "Lượt theo dõi"
    }
]
const booklist = [
    {
        id: 1,
        name: "Trận Vấn Trường Sinh",
        stats: 123,
        type: "Tiên Hiệp",
        autor: "Quan Hư",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/b574c544335443cc763f3702d598d50b96124d4ea630dd4bfbad677c68892090.jpg"
    },
    {
        id: 2,
        name: "Thâm Hải Dư Tẫn (Tro Tàn Biển Sâu)",
        stats: 102,
    },
    {
        id: 3,
        name: "Tuyệt Cảnh Hắc Dạ",
        stats: 12,
    },
    {
        id: 4,
        name: "Mỹ Ngu Chi Hoa Bình Ảnh Đế",
        stats: 11,
    },
    {
        id: 5,
        name: "Trận Vấn Trường Sinh",
        stats: 9,
    },
    {
        id: 6,
        name: "Trận Vấn Trường Sinh",
        stats: 8,
    }
]
</script>

<template lang="pug">
.main.flex.flex-row.justify-center
    .ranklist(v-for="item in ranklist" :key="item.id")
        .title.flex.justify-between
            div {{ item.name }}
            b Xem thêm {{'>'}}
        hr/
        .top-book.flex.flex-row.justify-between
            .info
                div.no1 NO.1
                p.name {{ booklist[0].name }}
                p.stats <i>{{ booklist[0].stats }}</i> {{ item.stat }}
                .flex#stats
                    p.type {{ booklist[0].type }}
                    p.autor {{ booklist[0].autor }}
            img(:src="booklist[0].imgurl")
        .list-book
            .book-item(v-for="item in booklist.slice(1)" :key="item.id")
                hr/
                .flex.flex-row.justify-between
                    .flex.flex-row.gap-10
                        p.rank(:class="{rank2: item.id === 2, rank3: item.id === 3}") {{ item.id }}
                        p.name {{ item.name }}
                    p.stats <i>{{ item.stats }}</i>
        


</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.main
    width 100%
    color black
    margin 20px 0px

.gap-10
    gap 10px

.ranklist
    margin 10px 20px
    .title
        font-size 12px
        color #333
        div
            font-size 18px
            color black
    .top-book
        gap 20px
        padding 10px 0px
        .info
            color black
            .no1
                color white 
                background red
                display inline-block
                padding 3px 5px
                font-weight bold
        .stats
            color red
            font-size 12px
            i 
                font-size 18px
                font-weight bold
        img
            height 100px
    

#stats
    gap 10px
    color #333
    font-size 12px

.rank2
    background: orange
    padding 2px 5px
    color: white

.rank3
    background: yellow
    padding 2px 5px
    color: white
</style>