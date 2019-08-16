<template>
  <ul id="SelectNumber">
    <li class="numBox">
      <div>
        <img @click="clickNumber('0')" src="../../../../assets/img/btn0.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('1')" src="../../../../assets/img/btn1.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('2')" src="../../../../assets/img/btn2.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('3')" src="../../../../assets/img/btn3.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('4')" src="../../../../assets/img/btn4.png" alt="">
      </div>
    </li>
    <li class="numBox">
      <div>
        <img @click="clickNumber('5')" src="../../../../assets/img/btn5.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('6')" src="../../../../assets/img/btn6.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('7')" src="../../../../assets/img/btn7.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('8')" src="../../../../assets/img/btn8.png" alt="">
      </div>
      <div>
        <img @click="clickNumber('9')" src="../../../../assets/img/btn9.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SelectNumber',
  data: () => ({

  }),
  methods: {
    clickNumber (num) {
      this.$store.commit('SET_NUMBER', num)
    }
  }
}
</script>

 <style scoped lang='scss'>
  #SelectNumber {
    flex-grow:638;
    width: 0;
    height: 300px;
    background-color: rgba(28, 32, 35,0.6);
    padding: 40px 20px;
    border-radius: 5px;
    margin-top: 30px;
    box-sizing: border-box;
    @media all and (max-width: 1366px){
      height: 213px;
      padding: 28px 14px;
      margin-top: 21px;
    }
    .numBox {
      margin-bottom: 29px;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      @media all and (max-width: 1366px){
        margin-bottom: 21px;
      }
      div {
        flex-grow:1;
        height: 100px;
        border-radius: 50%;
        margin-left: 3px;
        position: relative;
        @media all and (max-width: 1366px){
          height: 71px;
        }
        img {
          width: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .shade {
        box-shadow: 0px 0px 10px 3px rgba(245,237,142,1);
        border-radius: 50%;
      }
    }
  }
 </style>
