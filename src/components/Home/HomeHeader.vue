<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}
</script>

<template lang="pug">
    header
      div#title
        div#logo 
          RouterLink(to="/") Tàng thư viện
        RouterLink(to="/forum") 
          button#forum-btn Diễn đàn
      div#right
        button#download 
          i.pi-arrow-down.pi
          div App
        button#login
          RouterLink(to="/login") 
            i.pi-user.pi-user.pi/
  
</template>

<style lang="stylus" scoped>
@import '../../assets/main.styl'


header
  display flex
  justify-content space-between
  align-items center
  height 52px
  width 100%


#title
  display flex
  align-items center
  padding-left 10px
  gap 10px

#logo
  font-size 17px
  font-weight 500
  line-height 24px

#logo a
  color black
  &:hover
    color #23527c

#forum-btn
  color red
  background-color white
  border 1px solid red
  border-radius: 4px
  font-size 13px
  font-weight 100
  line-height: 15px
  padding 5px 12px
  text-align: center
  &:hover
    color teal

#right
  display flex
  align-items center
  gap 10px
  padding-right 10px

#download
  display: flex
  flex-direction: row
  gap 8px
  padding 8px 10px
  background-color teal
  border 0px
  font-size 13px
  font-weight 100
  line-height: 15px
  text-align: center
  color white

#login
  padding: 5px

#login a
  color red
  font-size 20px
</style>
