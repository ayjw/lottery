<template>
  <div id="LiveBroadcast">
    <div class="title">{{$t('lang.LiveBroadcast_title')}}</div>
    <ul class="list">
      <li v-for="(x,item) in data" :key="item">
        <div class="issue">{{x.name}}</div>
        <div class="record add" v-if="x.type === '+'">{{x.money}}</div>
        <div class="record lose" v-if="x.type === '-'">{{x.money}}</div>
        <div class="time">{{formatDate(x.time)}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import socket from './../../../socket'
import {formatDate} from './../../../assets/common'
export default {
  name: 'LiveBroadcast',
  data: () => ({
    data: []
  }),
  mounted () {
    socket.addEventListener('message', ev => {
      let message = ev.data.split('\n')
      message.forEach(x => {
        let data = JSON.parse(x)[0]
        switch (data.type) {
          case 2:
            this.data.unshift({
              type: '-',
              issue: data.data.periods,
              name: data.data.from,
              money: data.data.quantity,
              time: data.data.times
            })
            this.data.splice(9, this.data.length)
            break
          case 1:
            this.data.unshift({
              type: '+',
              issue: data.data.periods,
              name: data.data.to,
              money: data.data.quantity,
              time: data.data.times
            })
            this.data.splice(9, this.data.length)
            break
        }
      })
    })
  },
  methods: {
    formatDate (time) {
      return formatDate(time)
    }
  }
}
</script>

<style scoped lang='scss'>
  #LiveBroadcast {
    flex-grow: 2;
    width: 0;
    height: 340px;
    background-color: #212527;
    box-shadow: 0px 0px 8px 0px rgba(0,0, 0, 0.8);
    padding: 24px 23px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 4.5%;
    @media all and (max-width: 1366px){
      height: 242px;
      padding: 17px 16px;
      font-size: 12px;
    }
    .title {
      color: #a6a6a6;
    }
    .list {
      color: #FFFFFF;
      padding-top: 18px;
      box-sizing: border-box;
      font-family: Consolas,Monaco,monospace;
      @media all and (max-width: 1366px){
        padding-top: 12.8px;
      }
      li{
        display: flex;
        display: -webkit-flex;
        line-height: 22px;
        margin-top: 8px;
        @media all and (max-width: 1366px){
          line-height: 16px;
          margin-top: 5.5px;
        }
        .issue {
          flex-grow: 1;
          width: 0;
        }
        .record {
          flex-grow: 2;
          width: 0;
          height: 22px;
          background-color: #16181a;
          text-align: center;
          @media all and (max-width: 1366px){
            height: 16px;
          }
        }
        .add {
          color:#b4271b;
        }
        .lose {
          color: #509a3c;
        }
        .time {
          flex-grow: 1;
          width: 0;
          text-align: center;
        }
      }
    }
  }
</style>
