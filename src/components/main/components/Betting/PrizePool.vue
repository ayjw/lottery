<template>
  <div id="PrizePool">
    <div>{{$t('lang.PrizePool')}} <span>{{0}}</span></div>
    <div>{{$t('lang.BetLimit')}} <span>{{'0/0'}}</span></div>
    <p>{{'0%'}}</p>
  </div>
</template>

<script>
import api from '../../../../assets/common/eos'
export default {
  name: 'PrizePool',
  created () {
    this.fetchOrders()
  },
  methods: {
    fetchOrders () {
      api.getCurrencyBalance({account_name: 'bob', code: 'eosio.token', symbol: 'EOS'})
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped lang='scss'>
  #PrizePool {
    height: 36px;
    display: flex;
    display: -webkit-box;
    color: #FFFFFF;
    line-height: 36px;
    @media all and (max-width: 1366px){
      height: 25.6px;
      line-height: 25.6px;
      font-size: 12px;
    }
    div {
      background-color: #1d1b1a;
      padding: 0 24px;
      border: 1px solid #5b5755;
      margin-right: 20px;
      border-radius: 5px;
      font-size: 14px;
      @media all and (max-width: 1366px){
        padding: 0 17px;
        margin-right: 14px;
        font-size: 12px;
      }
      span {
        margin-left: 45px;
        @media all and (max-width: 1366px){
          margin-left: 32px;
        }
      }
    }
  }
</style>
