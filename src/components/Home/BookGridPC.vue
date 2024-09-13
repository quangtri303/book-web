<script setup>
const props = defineProps( ['title'] );

const booklist = [
    {
        id: 1,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/f760a5986c48377f5dc2d603654c6adad629b21add67f80bd2a79a0d7a82b289.jpg",
        name: "Quỷ Tam Quốc",
        author: "Bút Điểm Yên Hoa",
        chapter: 1123,
        type: "Đô thị",
        desc: "Tu giới Cửu Châu, Đạo Đình nhất thống, thế gia áp bách, tông môn lũng..."
    },
    {
        id: 2,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/74f87afe38a5087246fdfd5c39a2c5a2c9de8bb7763a356487758188624ee522.jpg",
        name: "Cố Chướng Ô Thác Bang",
        author: "Hoa Thanh Thần",
        chapter: 1321,
        type: "Đô thị",
        desc: "Cơ thể giả kim loại cải tiến, bạn gái AI, trong đầu mạng lưới thần kinh,..."
    },
    {
        id: 3,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/788e84598016bfafbdb38e25f8e28bfe098d6b5e144763b6457c4fb6efe1a6e6.jpg",
        name: "Mỹ Ngu Chi Hoa Bình Ảnh Đế",
        author: "Hoa Bất Đáo Tiểu Thuyết Khán",
        chapter: 123,
        type: "Đô thị",
        desc: "Vâng, ta chính là bình hoa!"
    },
    {
        id: 4,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/361a521abbd4921911cf20960bbe5c88d0c079a4bf8813965ae98f22db04b7a8.jpg",
        name: "Thần Thoại Đại Lục",
        author: "Đào Đích Tinh Linh",
        chapter: 112,
        type: "Đô thị",
        desc: "Thần thoại, huyền huyễn, võ hiệp, kiếm hiệp, tu chân, dị giới, dị năng,..."
    },
    {
        id: 5,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        name: "Tiên Nhân Biến Mất Về Sau",
        author: "Hồng Trần",
        chapter: 1125,
        type: "Đô thị",
        desc: "Trên trời có thần, dưới đất có người, thế gian không có tiên. Thân là..."
    },
    {
        id: 6,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/74f87afe38a5087246fdfd5c39a2c5a2c9de8bb7763a356487758188624ee522.jpg",
        name: "Cố Chướng Ô Thác Bang",
        author: "Hoa Thanh Thần",
        chapter: 1321,
        type: "Đô thị",
        desc: "Cơ thể giả kim loại cải tiến, bạn gái AI, trong đầu mạng lưới thần kinh,..."
    },
    {
        id: 7,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/788e84598016bfafbdb38e25f8e28bfe098d6b5e144763b6457c4fb6efe1a6e6.jpg",
        name: "Mỹ Ngu Chi Hoa Bình Ảnh Đế",
        author: "Hoa Bất Đáo Tiểu Thuyết Khán",
        chapter: 123,
        type: "Đô thị",
        desc: "Vâng, ta chính là bình hoa!"
    },
    {
        id: 8,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/361a521abbd4921911cf20960bbe5c88d0c079a4bf8813965ae98f22db04b7a8.jpg",
        name: "Thần Thoại Đại Lục",
        author: "Đào Đích Tinh Linh",
        chapter: 112,
        type: "Đô thị",
        desc: "Thần thoại, huyền huyễn, võ hiệp, kiếm hiệp, tu chân, dị giới, dị năng,..."
    },
    {
        id: 9,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        name: "Tiên Nhân Biến Mất Về Sau",
        author: "Hồng Trần",
        chapter: 1125,
        type: "Đô thị",
        desc: "Trên trời có thần, dưới đất có người, thế gian không có tiên. Thân là..."
    },
    {
        id: 10,
        url: "https://www.nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        name: "Tiên Nhân Biến Mất Về Sau",
        author: "Hồng Trần",
        chapter: 1125,
        type: "Đô thị",
        desc: "Trên trời có thần, dưới đất có người, thế gian không có tiên. Thân là..."
    }
]
</script>

<template lang="pug">
.main.flex.justify-center
    .listbook.flex.flex-col
        b.title {{ title }}
        hr
        .books.flex.flex-row
            .topbook.flex.flex-col.justify-center
                img(:src="booklist[0].url" alt="booklist[0].name")
                .name {{ booklist[0].name }}
                .author {{ booklist[0].author }}
                .chapter <b>{{ booklist[0].chapter }}</b> chương
                .desc {{ booklist[0].desc }}
            .sidebook
                .side-item(v-for="book in booklist.slice(1)" :key="book.id").flex.flex-row.justify-center
                    img(:src="book.url" alt="book.name")
                    .info.flex.flex-col.justify-start
                        .name {{ book.name }}
                        .desc {{ book.desc }}
                        .flex.flex-row.justify-between
                            .author {{ book.author }}
                            .type {{ book.type }}
                

</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.main
    width 100%
    margin 50px 0px

.title
    font-size 18px

hr
    border 1px solid #e0e0e0
    margin 10px 0px

.listbook
    width 80%

.topbook
    flex-basis 25%
    text-align center
    gap 10px
    align-items center
    img
        height 200px
    .name
        font-size 16px
        font-weight bold
    .author
        color red
    .chapter
        b
            font-size 18px
    .desc
        text-align left
        color #626260
        font-size 12px
        margin 0px 30px


.sidebook
    flex-basis 75%
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 5px 

.side-item
    background white
    max-width 300px
    border 1px solid #ddd
    padding 10px
    height 100px
    align-items center
    gap 15px

    img
        height 80%px 
    .info
        gap 10px
        .name
            font-size 16px
        .desc
            font-size 12px
            color #666
        .author, .type
            font-size 12px
            color #a6a6a6
        .type
            border 1px solid #a6a6a6
            padding 2px 3px

</style>