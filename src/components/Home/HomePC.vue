<script setup>
import NavbarPC from '@/components/Home/NavbarPC.vue'
import BannerPC from '@/components/Home/BannerPC.vue'
import BooklistPC from '@/components/Home/BooklistPC.vue'
import BookRankPC from '@/components/Home/BookRankPC.vue'
import BookGridPC from '@/components/Home/BookGridPC.vue'
import TopUserPC from '@/components/Home/TopUserPC.vue'
</script>

<template lang="pug">
.main
    .header
        .logo
            img(src="https://truyen.tangthuvien.vn/images/logo-web.png" alt="Logo")
        .search-bar
            input(type="text" placeholder="Nhập tên truyện hoặc tác giả...")
            button
                i.pi.pi-search
        div.account
            button.account-btn
                i.pi.pi-user
                div Tài khoản
    NavbarPC
    BannerPC
    BooklistPC
    img.ads(src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg")
    BookRankPC
    BookGridPC(title="Truyện mới" )
    TopUserPC
    img.ads(src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg")
    BookGridPC(title="Truyện đã hoàn thành" )
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.main
    font-size 14px

.header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 20px
    height: 60px

.logo
    display: flex
    height: 90%
    width 100%

.search-bar
    display: flex
    align-items: center
    width 100%
    justify-content: center
    input
        padding-left 10px
        border: 1px solid #ccc
        height: 38px
        width 80%
    button
        border: none
        padding: 10px
        border-radius: 5px
        color white
        font-size: 18px
        hover-bg(teal,red)

.header .account
    width: 100%
    display: flex
    justify-content: end

.account-btn
    border 1px solid black
    padding: 10px 15px
    font-style: italic;
    display: flex
    align-items: center
    hover-bg(white,red)
    hover-text(black,white)
    i
        margin-right: 5px

.ads
    width 90%
    margin 0 auto
    object-fit cover
    display block
</style>