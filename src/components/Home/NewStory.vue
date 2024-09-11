<script setup>
import { ref, computed } from 'vue';

const story = [
    {
        id: "1",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        desc: "Quỷ Dị Giáng Lâm? May Mà Ta Là Thập Điện Diêm Vương (Quỷ Dị Hàng Lâm? Hoàn Hảo Ngã Thị Thập Điện Diêm Vương)"
    },
    {
        id: "2",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        desc: "Quỷ Dị Giáng Lâm? May Mà Ta Là Thập Điện Diêm Vương (Quỷ Dị Hàng Lâm? Hoàn Hảo Ngã Thị Thập Điện Diêm Vương)"
    },
    {
        id: "3",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        desc: "Quỷ Dị Giáng Lâm? May Mà Ta Là Thập Điện Diêm Vương (Quỷ Dị Hàng Lâm? Hoàn Hảo Ngã Thị Thập Điện Diêm Vương)"
    },
    {
        id: "4",
        imgurl: "https://nae.vn/ttv/ttv/public/images/story/db460080ecb8d6af55606bb7870df6d5858553dcf44ddb59352ccb13db52ab41.jpg",
        desc: "Quỷ Dị Giáng Lâm? May Mà Ta Là Thập Điện Diêm Vương (Quỷ Dị Hàng Lâm? Hoàn Hảo Ngã Thị Thập Điện Diêm Vương)"
    },
]

const newStoryCategory = ref(0)
function toggleCategory(index) {
    newStoryCategory.value = index;
}


const truncatedDescription = computed(() => {
    return story.map(item => ({
        ...item,
        truncatedDesc: item.desc.length > 70 ? item.desc.slice(0, 70) + '...' : item.desc
    }));
});

</script>

<template lang="pug">
    .new
        .title
            div Truyện mới cập nhật
            b Xem thêm {{'>'}}
        .category
            .category-item(@click="toggleCategory(0)" :class="{ active: newStoryCategory == 0 }") Convert
            .category-item(@click="toggleCategory(1)" :class="{ active: newStoryCategory == 1 }") Dịch
            .category-item(@click="toggleCategory(2)" :class="{ active: newStoryCategory == 2 }") Ngôn tình
        
        div.story-item
            div#item-small(v-for="item in truncatedDescription" :key="item.id")
                img(:src="item.imgurl")
                div.desc {{ item.truncatedDesc }}

    .new
        .title
            div Truyện xem nhiều
            b Xem thêm {{'>'}}
        
        div.story-item
            div#item-small(v-for="item in truncatedDescription" :key="item.id")
                img(:src="item.imgurl")
                div.desc {{ item.truncatedDesc }}
        
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.new
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

.story-item
    display: flex
    flex-direction: row
    gap 5px
    padding 10px
    &:hover
        color #23527c

#item-small img
    width 100%
    max-height 100px
    object-fit cover

#item-small div
    color #333
    font-size 13px
    font-weight 100
    line-height: 18px
    margin 3px 0px 2px
    
.category
    display: flex
    flex-direction: row
    padding 10px
    justify-content: space-between

.category-item
    text-align: center
    width 100%
    border 1px solid red
    padding 8px 0px
    color red
    &.active
        background-color red
        color white
</style>