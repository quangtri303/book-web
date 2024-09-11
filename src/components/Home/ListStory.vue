<script setup>
import { ref, computed } from 'vue';
const story = [
    {
        id: "1",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/b574c544335443cc763f3702d598d50b96124d4ea630dd4bfbad677c68892090.jpg",
        name: "Trận Vấn Trường Sinh",
        category: "Tiên Hiệp",
        author: "Quan Hư",
        view: 12345,
        status: "Chưa hoàn thành",
        chapters: 123
    },
    {
        id: "2",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/1b1a3ee940c87e351c7b2e8171c0e3be882e979c609090b1b09b61fce2f81022.jpg",
        name: "Thâm Hải Dư Tẫn (Tro Tàn Biển Sâu)",
        category: "Khoa Huyễn",
        author: "Viễn Đồng",
        view: 12345,
        status: "Chưa hoàn thành",
        chapters: 123
    },
    {
        id: "3",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/f760a5986c48377f5dc2d603654c6adad629b21add67f80bd2a79a0d7a82b289.jpg",
        name: "Tuyệt Cảnh Hắc Dạ",
        category: "Tiên Hiệp",
        author: "Cổn Khai ",
        view: 12345,
        status: "Chưa hoàn thành",
        chapters: 123
    },
    {
        id: "4",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/74f87afe38a5087246fdfd5c39a2c5a2c9de8bb7763a356487758188624ee522.jpg",
        name: "Mỹ Ngu Chi Hoa Bình Ảnh Đế",
        category: "Đô Thị",
        author: "Thất Thất Gia D Miêu Miêu ",
        view: 12345,
        status: "Chưa hoàn thành",
        chapters: 123
    },
]
</script>

<template lang="pug">
    .list
        .title
            div Truyện đề cử
            b Xem thêm {{'>'}}
        .list-story
            .story-item(v-for="item in story" :key="item.id")
                img(:src="item.imgurl")
                .info
                    b.name {{ item.name }}
                    div.category {{ item.category }}
                    div.author {{ item.author }}
                    div.view {{ item.view }}
                    div.status {{ item.status }}
                    div.chapters {{ item.chapters }}
    img.ads(src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg")
    .list
        .title
            div Đã hoàn thành
            b Xem thêm {{'>'}}
        .list-story
            .story-item(v-for="item in story" :key="item.id")
                img(:src="item.imgurl")
                .info
                    b.name {{ item.name }}
                    div.category {{ item.category }}
                    div.author {{ item.author }}
                    div.view {{ item.view }}
                    div.status {{ item.status }}
                    div.chapters {{ item.chapters }}
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.ads
    width 90%
    margin 0 auto
    padding 10px
    object-fit cover
    display block

.list
    display: flex
    flex-direction: column
    gap 10px

.title
    display: flex
    justify-content space-between
    padding 10px
    font-size 16px
    font-weight 500
    line-height 24px
    color black

.list-story
    display: flex
    gap 10px
    flex-direction: column

.story-item
    display: flex
    gap 10px
    padding 10px
    &:hover
        color #23527c

.story-item img
    width: 70px
    height: 100%
    object-fit: cover

.name
    font-size 14px

.category, .author
    font-size 12px

.view, .status, .chapters
    font-size 13px
</style>