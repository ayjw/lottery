<template>
  <div id="Betting">
    <PrizePool/>
    <div class="BettingArea">
      <SelectNumber/>
      <Betshow/>
      <Betoption/>
    </div>
  </div>
</template>
<script>
import PrizePool from './PrizePool'
import SelectNumber from './SelectNumber'
import Betshow from './Betshow'
import Betoption from './Betoption'
export default {
  name: 'Betting',
  components: {
    PrizePool,
    SelectNumber,
    Betshow,
    Betoption
  }
}
</script>

<style lang='scss'>
  @font-face {
    font-family: 'myFont';
    src: url('../../../../assets/font/PingFang.ttf');
    font-weight: normal;
    font-style: normal;
  }
  #Betting {
    width: 100%;
    height:450px;
    background:url('../../../../assets/img/Bettingbg.png') 0 0 no-repeat;
    background-size: 100% 100%;
    margin-top: 5px;
    padding: 30px 50px 45px 35px;
    box-sizing: border-box;
    @media all and (max-width: 1366px){
      height:320px;
      margin-top: 3.5px;
      padding: 21px 36px 32px 24px;
    }
    .BettingArea {
      display: flex;
      display: -webkit-flex;
    }
  }
</style>
