<template>
  <div id="Footer">
    <LiveBroadcast/>
    <LotteryNumber/>
  </div>
</template>
<script>
import LiveBroadcast from './components/LiveBroadcast'
import LotteryNumber from './components/LotteryNumber'
export default {
  name: 'Footer',
  components: {
    LiveBroadcast,
    LotteryNumber
  }
}
</script>

<style lang='scss'>
  #Footer {
    width: 100%;
    padding:20px 12%;
    box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    justify-content:center;
  }
</style>
