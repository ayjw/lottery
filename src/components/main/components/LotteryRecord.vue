<template>
  <div id="LotteryRecord">
    <div class="title">{{$t('lang.lotteryRecord_title')}}</div>
    <ul class="list">
      <li v-for="(x,item) in LotteryRecord" :key="item">
        <div class="issue">{{x.issue}}</div>
        <div class="record">{{x.result}}</div>
        <div class="time">{{formatDate(x.time)}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {formatDate} from './../../../assets/common'
import socket from './../../../socket'
import {historyLottery} from './../../../assets/common/api'
export default {
  name: 'LotteryRecord',
  computed: mapState(['LotteryRecord']),
  data: () => ({data: []}),
  created () {
    this.lottery()
  },
  mounted () {
    socket.addEventListener('message', ev => {
      let message = ev.data.split('\n')
      message.forEach(x => {
        let data = JSON.parse(x)[0]
        if (data.type === 3) {
          this.$store.commit('LOTTERY_RECORD_UNSHIFT', {
            time: data.time,
            issue: data.gameid,
            result: data.result.toString().replace(/,/g, '')
          })
        }
      })
    })
  },
  methods: {
    formatDate (time) {
      return formatDate(time)
    },
    lottery () {
      historyLottery({page_num: 1, page_limit: 9}).then(res => {
        if (res.data.code === 200) {
          let data = res.data.data.data
          data.map(x => {
            this.$store.commit('LOTTERY_RECORD_PUSH', {
              time: x.time,
              issue: x.gameid,
              result: x.result.toString().replace(/,/g, '')
            })
          })
          this.$store.commit('LOTTERY_RECORD_LAST', {
            time: data[0].time,
            issue: data[0].gameid,
            result: data[0].result.toString().replace(/,/g, '')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>
  #LotteryRecord {
    height: 340px;
    background-color: #212527;
    box-shadow: 0px 0px 8px 0px rgba(0,0, 0, 0.8);
    padding: 24px 23px;
    box-sizing: border-box;
    font-size: 14px;
    @media all and (max-width: 1366px){
      height: 242px;
      font-size: 12px;
      padding: 17px 16px;
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
        padding-top:12.8px;
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
          @media all and (max-width: 1366px){
            height: 16px;
          }
          background-color: #16181a;
          text-align: center;
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
