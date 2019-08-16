<template>
  <div id="SelectSize">
    <div class="periodBox">
      <div class="period"><span>{{issue}}</span></div>
      <div class="timer">
        <img src="../../../../assets/img/time.png" alt="">
        <span>{{time}}</span>
        </div>
    </div>
    <div class="moneyText">{{$t('lang.betAmount')}}</div>
    <InputBox/>
  </div>
</template>
<script>
import { setInterval } from 'timers'
import {mapState} from 'vuex'
import InputBox from './InputBox'
export default {
  name: 'SelectSize',
  data: () => ({
    time: 0
  }),
  components: {
    InputBox
  },
  computed: mapState({
    issue: state => state.LotteryRecord[0] && parseInt(state.LotteryRecord[0].issue) + 1
  }),
  mounted () {
    setInterval(() => {
      let data = 60 - new Date().getSeconds()
      this.time = `00:${(data < 10 ? '0' + data : data)}`
    }, 1e3)
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
  #SelectSize {
    margin-top: 26px;
    height: 215px;
    background-color: rgba(28,32,35,0.6);
    border-radius: 5px;
    padding: 29px 40px;
    box-sizing: border-box;
    color: #FFFFFF;
    @media all and (max-width: 1366px){
      margin-top: 19px;
      height: 153px;
      border-radius: 5px;
      padding: 20px 28px;
    }
    .periodBox {
      display: flex;
      display: -webkit-flex;
      justify-content:space-around;
      .period {
        flex-grow: 1;
        width: 0;
        height: 36px;
        background-color: #000000;
        border:1px solid #9a7830;
        border-radius: 5px;
        line-height: 36px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        @media all and (max-width: 1366px){
          height: 25.6px;
          line-height: 25.6px;
          font-size: 12px;
        }
      }
      .timer {
        flex-grow: 1;
        width: 0;
        height: 36px;
        line-height: 36px;
        font-size: 20px;
        font-family: myFont;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        justify-content:flex-end;
        align-items: center;
        @media all and (max-width: 1366px){
          height: 25.6px;
          line-height: 25.6px;
          font-size: 14px;
        }
        img {
          max-width: 100%;
          max-height: 61%;
        }
        span {
          flex-grow:0.5;
          height: 100%;
          display:block;
          text-align: right
        }
      }
    }
    .moneyText {
      height: 30px;
      text-align: right;
      line-height: 30px;
      color: #a9a9a9;
      font-size: 16px;
      @media all and (max-width: 1366px){
        height: 21px;
        line-height: 21px;
        font-size: 12px;
      }
    }
  }
</style>
