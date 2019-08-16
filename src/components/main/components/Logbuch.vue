
<template>
  <div id="Logbuch">
    <div class="title">{{$t('lang.Logbuch_title')}}</div>
    <div class="ndBox">
      <div class="secBox">
        <img class='tels' :src="require('./../../../assets/img/'+historyLast[1]+'.png')" alt="">
        <img class="tel" src="./../../../assets/img/2nd.png" alt="">
      </div>
      <div class="secBox">
        <img class="telFir" :src="require('./../../../assets/img/'+historyLast[0]+'.png')" alt="">
        <img class="tel" src="./../../../assets/img/1st.png" alt="">
      </div>
      <div class="secBox">
        <img class="telTir" :src="require('./../../../assets/img/'+historyLast[2]+'.png')" alt="">
        <img class="tel" src="./../../../assets/img/3rd.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import socket from './../../../socket'
export default {
  name: 'Logbuch',
  data: () => ({
  }),
  computed: mapState(['historyLast']),
  mounted () {
    socket.addEventListener('message', ev => {
      let message = ev.data.split('\n')
      message.forEach(x => {
        let data = JSON.parse(x)[0]
        if (data.type === 3) {
          this.$store.commit('LOTTERY_RECORD_LAST', data)
        }
      })
    })
  },
  methods: {
  }

}
</script>

 <style scoped lang='scss'>
  #Logbuch {
    color: #a6a6a6;
    outline: 2px solid #303233;
    background-color: #1c2023;
    height: 266px;
    margin-top: 11px;
    padding: 23px;
    box-sizing: border-box;
    font-size: 14px;
    @media all and (max-width: 1366px){
      margin-top: 8px;
      height: 188px;
      padding:17px 16px;
    }
    .ndBox {
      display: flex;
      display: -webkit-flex;
      justify-content:center;
      .secBox {
        flex-grow:1;
        width: 0;
        height: 183px;
        margin-top: 15px;
        text-align: center;
        position: relative;
        @media all and (max-width: 1366px){
          height: 130px;
          margin-top:10px
        }
        img {
          max-width: 90%;
          max-height: 90%;
        }
        .tel {
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform:translate(-64px);
          -ms-transform:translate(-64px);
          -moz-transform:translate(-64px);
          -webkit-transform:translate(-64px);
          -o-transform:translate(-64px);
          @media all and (max-width: 1366px){
            left: 0;
            transform:translate(6px);
            -ms-transform:translate(6px);
            -moz-transform:translate(6px);
            -webkit-transform:translate(6px);
            -o-transform:translate(6px);
          }
        }
        .tels{
          margin-top: 35px;
          @media all and (max-width: 1366px){
            margin-top: 25px;
          }
        }
        .telTir {
          margin-top: 62px;
          @media all and (max-width: 1366px){
            margin-top:44px;
          }
        }
      }
    }
  }
 </style>
