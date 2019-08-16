<template>
  <div id="Betshow">
    <div class="title">{{$t('lang.betCombination')}}</div>
    <div class="box num1st">
      <img src="../../../../assets/img/num1st.png" alt="">
      <span>{{number[0] ? number[0] : ''}}</span>
    </div>
    <div class="box">
      <img src="../../../../assets/img/num2nd.png" alt="">
      <span>{{number[1] ? number[1] : ''}}</span>
    </div>
    <div class=" box">
      <img src="../../../../assets/img/num3rd.png" alt="">
      <span>{{number[2] ? number[2] : ''}}</span>
    </div>
    <button @click="reset">{{$t('lang.reset')}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Betshow',
  computed: mapState(['number']),
  methods: {
    reset () {
      this.$store.commit('SET_RESET')
    }
  }
}
</script>

<style scoped lang='scss'>
  #Betshow {
    flex-grow:310;
    width: 0;
    font-size: 14px;
    color: #a6a7a7;
    padding: 0 28px;
    box-sizing: border-box;
    @media all and (max-width: 1366px){
      font-size: 12px;
      padding: 0 20px;
    }
    .title {
      text-indent: 53px;
      @media all and (max-width: 1366px){
        text-indent: 37px;
      }
    }
    .box {
      height: 50px;
      border-radius: 4px;
      border: 2px solid #414243;
      margin-bottom: 35px;
      display: flex;
      display: -webkit-flex;
      justify-content:space-around;
      box-sizing: border-box;
      background-color: #131617;
      align-items: center;
      @media all and (max-width: 1366px){
        height:36px ;
        margin-bottom:24px;
      }
      span {
        flex-grow: 0.3;
        width: 0;
        height: 22px;
        display: block;
        line-height: 22px;
        text-align: center;
        border: 1px solid #9a7830;
        @media all and (max-width: 1366px){
          height:16px ;
          line-height: 16px;
        }
      }
      img {
        max-width: 100%;
        max-height:70%;
      }
    }
    .num1st {
      margin-top: 3px;
    }
    button {
      width: 95px;
      height: 30px;
      background-color: #509a3c;
      border-radius: 5px;
      line-height: 30px;
      color: #ffffff;
      float: right;
      @media all and (max-width: 1366px){
        width: 72px;
        height: 22px;
        line-height: 22px;
        font-size: 14px;
      }
    }

  }
</style>
