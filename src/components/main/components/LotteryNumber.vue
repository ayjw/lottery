<template>
  <div id="LotteryNumber">
    <div class="box">
      <div class="title">
        <span v-for="x in $t('lang.LotteryNumber_Title')" :key='x'>{{x}}</span>
      </div>
      <el-scrollbar class="scrollHeight">
        <ul class="infinite-list blockList" v-infinite-scroll="lotteryChange"><!-- v-infinite-scroll="lotteryChange" -->
          <li v-for="(x,item) in myData" class="infinite-list-item" :key='item'>
            <div class="block">{{formatDate(x.time)}}</div>
            <div class="number">{{x.issue}}</div>
            <div class="time">{{x.result}}</div>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import socket from './../../../socket'
import {formatDate} from './../../../assets/common'
import {historyLottery} from './../../../assets/common/api'
export default {
  name: 'LotteryNumber',
  data: () => ({
    myData: [],
    page: 1
  }),
  computed: mapState(['LotteryRecord']),
  mounted () {
    socket.addEventListener('message', ev => {
      let message = ev.data.split('\n')
      message.forEach(x => {
        let data = JSON.parse(x)[0]
        if (data.type === 3) {
          this.myData.unshift({
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
      historyLottery({page_num: this.page, page_limit: 9}).then(res => {
        if (res.data.code === 200) {
          let data = res.data.data.data
          data.map(x => {
            this.myData.push({
              time: x.time,
              issue: x.gameid,
              result: x.result.toString().replace(/,/g, '')
            })
          })
        }
      })
    },
    lotteryChange () {
      historyLottery({page_num: this.page, page_limit: 9}).then(res => {
        if (res.data.code === 200) {
          let data = res.data.data.data
          data.map(x => {
            this.myData.push({
              time: x.time,
              issue: x.gameid,
              result: x.result.toString().replace(/,/g, '')
            })
          })
        }
      })
      this.page++
    }
  }
}
</script>
<style src='../../../assets/common/scrollbar.scss'>
</style>
<style scoped lang='scss'>
  #LotteryNumber {
    flex-grow: 3;
    width: 0;
    font-size: 14px;
    color: #a6a6a6;
    box-sizing: border-box;
    padding: 0 4.5% 0 2.8%;
    @media all and (max-width: 1366px){
      font-size: 12px;
    }
    .box {
      height: 340px;
      outline: 2px solid #303233;
      background-color: #1c2023;
      @media all and (max-width: 1366px){
        height: 242px;
      }
      .scrollHeight {
        height: 300px;
        @media all and (max-width: 1366px){
          height: 228px;
        }
      }
      .title {
        height:18px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        box-sizing: border-box;
        @media all and (max-width: 1366px){
          height: 12.8px;
        }
        span {
          flex-grow: 2;
          width: 0;
          display: block;
          text-align: center;
          height: 100%;
          line-height: 38px;
          @media all and (max-width: 1366px){
            line-height: 27px;
          }
          &:nth-of-type(2) {
            flex-grow: 6;
            width: 0;
          }
        }
      }
    }
    .blockList {
      font-family: Consolas,Monaco,monospace;
      li {
        display: flex;
        display: -webkit-flex;
        border-top: 1px solid #24282b;
        height: 35px;
        line-height: 35px;
        @media all and (max-width: 1366px){
          height: 24px;
          line-height: 24px;
        }
        .block {
          flex-grow: 2;
          width: 0;
        text-align: center;
        }
        .number {
          flex-grow: 6;
          width: 0;
          text-align:right;
          text-align: center;
        }
        .time {
          flex-grow: 2;
          width: 0;
          text-align: center;
        }
      }
    }
  }
</style>
