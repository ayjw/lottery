<template>
  <div id="InputBox">
    <div class="betBox">
      <div>
        <input v-model="betInput" type="text">
      </div>
      <button @click ="setInput('/')">1/2</button>
      <button @click ="setInput('X')">2 X</button>
    </div>
    <div class="betNumber">
      <div>{{$t('lang.newBet')}} <span>1</span></div>
      <div>{{$t('lang.totalAmount')}} <span>{{betInput}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputBox',
  data: () => ({
    betInput: 1
  }),
  methods: {
    setInput (i) {
      switch (i) {
        case '/':
          this.betInput = Math.floor(this.betInput * 0.5 * 10) / 10
          break
        case 'X':
          this.betInput = Math.floor(this.betInput * 2 * 10) / 10
          this.betInput = this.betInput > 100 ? 100 : this.betInput
          break
        default:
          break
      }
    }
  },
  watch: {
    betInput: function () {
      if (!/^\d\.?([1-9]{0,1})$|^[1-9]\d{0,1}(\.\d{0,1}){0,1}$|^100$/.test(this.betInput)) {
        this.betInput = this.betInput.substr(0, this.betInput.length - 1)
      }
      this.$store.commit('SET_BETAMOUNT', (Number(this.betInput)).toFixed(4))
    }
  }
}
</script>

<style scoped lang='scss'>
  #InputBox {
    .betBox {
      height: 42px;
      background-color: #000000;
      border-radius: 5px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      @media all and (max-width: 1366px){
        height: 30px;
      }
      div {
        flex-grow:8;
        width: 0;
        height: 100%;
        input {
          width: 100%;
          background: none;
          border: none;
          height:100%;
          outline: none;
          color: #FFFFFF;
          text-indent: 20px;
          font-size: 24px;
          @media all and (max-width: 1366px){
              font-size: 12px;
            }
        }
      }
      button {
        flex-grow: 1;
        height: 30px;
        background-color: #191d1f;
        border-radius: 5px;
        font-size: 20px;
        font-family: myFont;
        color: #FFFFFF;
        margin-right: 10px;
        @media all and (max-width: 1366px){
          font-size: 14px;
        }
      }
    }
    .betNumber {
      display: flex;
      display: -webkit-flex;
      font-size: 16px;
      @media all and (max-width: 1366px){
        font-size: 12px;
      }
      align-items: center;
      justify-content: space-between;
      span {
        color: #509a3c;
        font-size: 24px;
        display: inline-block;
        line-height: 30px;
        @media all and (max-width: 1366px){
          font-size: 12px;
        }
      }
    }
  }
</style>
