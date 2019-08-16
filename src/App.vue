<template>
  <div id="app">
    <headerNav/>
    <Main v-show="!isGameInfo"/>
    <Footer v-show="!isGameInfo"/>
    <gameInfo v-show="isGameInfo"></gameInfo>
  </div>
</template>

<script>
import headerNav from './components/nav/header'
import Main from './components/main/main'
import Footer from './components/main/footer'
import gameInfo from './components/nav/gameinfo'
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: mapState(['isGameInfo']),
  components: {
    headerNav,
    Main,
    Footer,
    gameInfo
  }
}
</script>

<style lang='scss'>
  * {
    margin: 0;
    padding: 0;
  }
  html{
    min-width: 1200px;
  }
  body {
    background-color: #191d1f;
  }
  button {
    background: none;
    outline: none;
    border:none;
    cursor: pointer;
  }
  .lt {
    float: left;
  }
  .rt {
    float: right;
  }
  .clearFix:after {
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  }
  li{
    list-style: none;
  }

</style>
