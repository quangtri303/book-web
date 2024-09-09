<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}
</script>

<template lang="pug">
    header.container
      img(src="https://truyen.tangthuvien.vn/images/logo-web.png").logo
      div.search
        input(type="text", placeholder="Nhập tên truyện hoặc tác giả").search-bar
        button.search-btn
          i.pi.pi-search
      div
        button.login-btn
          i.pi.pi-address-book
          i Tài khoản

    nav.nav
      div.category 
        i.pi.pi-bars
        div Thể loại
      div.navbar
          div.nav-item 
            RouterLink(to="/forum") Diễn đàn
          div.nav-item 
            RouterLink(to="/") Bảng xếp hạng
          div.nav-item 
            RouterLink(to="/") Bộ lọc
          div.nav-item 
            RouterLink(to="/") Review
          div.nav-item 
            RouterLink(to="/") Cửa hàng
      button.dl Tải app
  
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'

.logo
  width 219px
  height 52px

.search
  height 38px
  display none
  flex-direction row
  @media (min-width 768px)
    display: flex

.search-bar
  width 284px
  height 100% - 2px
  border 1px solid rgba(#000, 50%)
  padding 0px 11px
  font-size 14px
  line-height 38px

.search-btn
  height 100%
  width 40px
  color white
  border 0px
  hover-bg(teal,red)

.login-btn
  display none
  flex-direction row
  align-items center
  padding 0px 20px
  gap 5px
  height 40px
  border 1px solid rgba(#000, 20%)
  font-size 14px
  line-height 38px
  hover-bg(#fff, red)
  hover-text(#000, #fff)
  @media (min-width 768px)
    display: flex


.nav
  display: flex
  justify-content: space-between
  align-items: center
  padding 0 20px
  background-color: teal

.navbar
  display: none

.dl
  display none

@media (min-width 768px)
  .nav
    margin-top 16px
    display: flex
    justify-content: center
    background-color: teal
    
  .navbar
    display: flex
    justify-content: space-between


  .nav-item
    text-decoration none
    color white
    &:visited
      color white
    hover-bg(teal,#077c86)
    font-size 14px
    line-height 21px
    padding 10px 25px

  .category
    color white
    background: #077c86
    padding 0 18px
    flex-basis: 15%
    display flex
    align-items center
    gap 5px

  .dl
    display: flex
    justify-content: center
    align-items: center
    padding: 0 20px
    height: 40px
    background-color: #077c86
    color: white
    font-size: 14px
    line-height: 21px
    border: 1px solid rgba(0, 0, 0, 20%)
    border-radius: 5px
    cursor: pointer
    &:hover
      background-color: #fff
      color: #077c86




header
  display flex
  justify-content space-between
  align-items center
  height 68px

a
  text-decoration: none
  color white

</style>
