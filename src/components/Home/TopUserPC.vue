<script setup>
const toplist = [
    {
        id: 1,
        name: "Lãnh Phong",
        stat: 5258,
        imgurl: "https://www.nae.vn/ttv/ttv/public/images_user/31811.png"
    },
    {
        id: 2,
        name: "RyuYamada",
        stat: 5111
    },
    {
        id: 3,
        name: "user12313",
        stat: 5200
    },
    {
        id: 4,
        name: "user12313",
        stat: 5001
    },
    {
        id: 5,
        name: "user12313",
        stat: 700
    },
    {
        id: 6,
        name: "user12313",
        stat: 580
    },
    {
        id: 7,
        name: "user12313",
        stat: 120
    },
    {
        id: 8,
        name: "user12313",
        stat: 50
    },
    {
        id: 9,
        name: "user12313",
        stat: 50
    },
    {
        id: 10,
        name: "user1231",
        stat: 5
    }
]

const update = [
    {
        id: 1,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 2,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 3,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 4,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 5,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 6,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    {
        id: 7,
        type: "Khoa Huyễn",
        name: "Tinh Không Chức Nghiệp Giả",
        chapter: 123,
        author: "Văn Sao Công",
        time: "13:53 13/09"
    },
    
]
</script>

<template lang="pug">
.main
    .container
        .topconverter.flex.flex-col
            .title Top converters
            hr
            .top-user.flex.flex-row.justify-between
                .info.flex.flex-col
                    div.no1 NO.1
                    p.name {{ toplist[0].name }}
                    p.stats <i>{{ toplist[0].stat }}</i> chương
                    .flex#stats
                        p.type {{ toplist[0].type }}
                        p.autor {{ toplist[0].autor }}
                img(:src="toplist[0].imgurl")
            .listuser(v-for="item in toplist.slice(1)" :key="item.id")
                hr
                .flex.flex-row.justify-between
                    .flex.flex-row.gap-10
                        p.rank(:class="{rank2: item.id === 2, rank3: item.id === 3}") {{ item.id }}
                        p.name {{ item.name }}
                    p.stats {{ item.stat }}
        .updated.flex.flex-col.gap-10
            .title.flex.flex-row.justify-between
                div Mới cập nhật
                b Xem thêm {{'>'}}
            hr
            .booklist
                table
                    tbody
                        tr(v-for="book in update" :key="book.id")
                            td.type {{ book.type }}
                            td.name {{ book.name }}
                            td.chapter {{ book.chapter }}
                            td.author {{ book.author }}
                            td.time {{ book.time }}

        .topdaigia.flex.flex-col
            .title Top đại gia
            hr
            .top-user.flex.flex-row.justify-between
                .info.flex.flex-col
                    div.no1 NO.1
                    p.name {{ toplist[0].name }}
                    p.stats <i>{{ toplist[0].stat }}</i> chương
                    .flex#stats
                        p.type {{ toplist[0].type }}
                        p.autor {{ toplist[0].autor }}
                img(:src="toplist[0].imgurl")
            .listuser(v-for="item in toplist.slice(1)" :key="item.id")
                hr
                .flex.flex-row.justify-between
                    .flex.flex-row.gap-10
                        p.rank(:class="{rank2: item.id === 2, rank3: item.id === 3}") {{ item.id }}
                        p.name {{ item.name }}
                    p.stats {{ item.stat }}
            
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.main
    width 100%
    display flex
    justify-content center

.container
    width 90%
    display flex
    justify-content center
    flex-direction row
    gap 10px
    padding 10px 0px

.topconverter, .topdaigia
    flex-basis 20%
    .title
        font-size 18px
        padding 0px 0px 4px
    hr
        border 1px solid #333
        margin 5px 5px
    .top-user
        gap 20px
        padding 0px 20px
        .info
            gap 10px
            .no1
                color white 
                background red
                display inline-block
                width 36px
                text-align center
                padding 3px 5px
                font-weight bold
        .stats
            color red
            font-size 12px
            i 
                font-size 18px
                font-weight bold
        img
            height 80px
    .listuser
        padding 3px 20px
        hr
            border 1px solid #e5e5e5
            margin-bottom 10px
        .name
            color #262626
            font-weight 300
        .stats
            color #666
            font-size 15px

.updated
    flex-basis 50%

    hr
        border 1px solid #333
        margin 5px 5px
    .booklist
        width 100%
        table
            width 100%
            border-collapse collapse
            tbody
                tr
                    border-bottom 1px solid #ddd
                    td
                        padding 8px
                        text-align left
                        
                    .type
                        color #808080
                        font-size 14px
                    .name
                        color #1a1a1a
                    .chapter, .time
                        color #666
                        font-size 12px
                    .author
                        color #999
                        font-size 12px



.gap-10
    gap 10px

.rank2
    background: orange
    padding 2px 5px
    color: white
    margin-left -5px
    margin-right -5px

.rank3
    background: yellow
    padding 2px 5px
    color: white
    margin-left -5px
    margin-right -5px

</style>