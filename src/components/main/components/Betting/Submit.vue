<template>
  <button id="Submit" @click="submit">{{$t('lang.submit')}}</button>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Submit',
  computed: mapState(['number', 'memo', 'BetAmount']),
  methods: {
    submit () {
      if (this.number.length !== 3 || parseFloat(this.BetAmount) <= 0) {
        return this.$message.error('请完善投注信息')
      }
      let data = null
      data = `lottery:[${this.number}]`
      this.$store.dispatch('SUBMIT', data)
    }
  }
}
</script>

<style scoped lang='scss'>
  #Submit {
    color: #FFFFFF;
    width: 140px;
    height: 40px;
    background-color: #f4b940;
    border-radius: 5px;
    font-size: 20px;
    font-family: myFont;
    margin-top: 19px;
    float: right;
    @media all and (max-width: 1366px){
      width: 100px;
      height: 28px;
      font-size: 16px;
    }
  }
</style>
