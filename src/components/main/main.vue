<template>
  <div id="Main">
    <div class="top">
      <TopLeft/>
      <LatestBlock/>
    </div>
    <Betting/>
  </div>
</template>
<script>
import TopLeft from './components/topLeft'
import LatestBlock from './components/LatestBlock'
import Betting from './components/Betting/index'
export default {
  name: 'Main',
  components: {
    TopLeft,
    LatestBlock,
    Betting
  }
}
</script>

<style scoped lang='scss'>
  #Main {
    width: 100%;
    padding: 50px 12.5% 0 12.5%;
    @media all and (max-width: 1366px){
      padding: 37.5px 12.5% 0 12.5%;
    }
    box-sizing: border-box;
    .top{
      display: flex;
      display: -webkit-flex;
      justify-content:center;
      .leftPart {
        flex-grow: 2;
        width:0;
        padding-left:4.5%;
      }
    }
  }
</style>
