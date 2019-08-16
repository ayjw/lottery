
<template>
  <div id="topLeft">
  <LotteryRecord/>
  <Logbuch/>
</div>
</template>

<script>
import LotteryRecord from './LotteryRecord'
import Logbuch from './Logbuch'
export default {
  name: 'TopLeft',
  components: {
    LotteryRecord,
    Logbuch
  }
}
</script>

<style scoped lang='scss'>
  #topLeft {
    flex-grow: 2;
    width: 0;
    margin-left: 4.5%;
  }
</style>
