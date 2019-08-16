<template>
  <div id="LatestBlock">
    <div class="box">
      <div class="title">
        <span v-for="x in $t('lang.LatestBlock_title')" :key='x'>{{x}}</span>
      </div>
      <ul class="blockList">
        <li v-for="(x,item) in data" :key='item'>
          <div class="block">{{x.num}}</div>
          <div class="number">{{x.id}}<span>{{x.high_light}}</span></div>
          <div class="time">{{x.time}}</div>
          <div class="arrows" v-if="x.show">
            <div>{{issue}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import socket from './../../../socket'
import {judgeTime, lastNum, price, priceOne, last} from './../../../assets/common'
export default {
  name: 'LatestBlock',
  data: () => ({
    data: [],
    type: false,
    award: []
  }),
  computed: mapState({
    issue: state => state.LotteryRecord[0] && parseInt(state.LotteryRecord[0].issue) + 1
  }),
  mounted () {
    socket.addEventListener('message', ev => {
      let message = ev.data.split('\n')
      message.forEach(x => {
        let data = JSON.parse(x)[0]
        if (data.type === 0) {
          if (this.award.length > 2) {
            this.type = false
            this.award = []
          }
          // 判断是否整点
          if (judgeTime(data.data.time)) {
            this.type = true
            if (lastNum(data.data.id)) {
              priceOne(this.data, data, true)
            } else {
              this.award.push(last(data.data.id))
              price(this.data, data, true)
            }
          } else if (this.type && !this.award.includes(last(data.data.id))) {
            if (lastNum(data.data.id)) {
              priceOne(this.data, data, false)
            } else {
              this.award.push(last(data.data.id))
              price(this.data, data, false)
            }
          } else {
            priceOne(this.data, data, false)
          }
          this.data.splice(15, this.data.length)
        }
      })
    })
  }
}
</script>

<style scoped lang='scss'>
  #LatestBlock {
    flex-grow: 3;
    width: 0;
    font-size: 14px;
    color: #a6a6a6;
    padding: 0 4.5% 0 2.8%;
    box-sizing: border-box;
    @media all and (max-width: 1366px){
      font-size: 12px
    }
    .box {
      height: 616px;
      outline: 2px solid #303233;
      background-color: #1c2023;
      @media all and (max-width: 1366px){
        height: 438px;
      }
      .title {
        height:38px;
        display: flex;
        display: -webkit-flex;
        box-sizing: border-box;
        @media all and (max-width: 1366px){
          height: 27px;
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
      li {
        display: flex;
        display: -webkit-flex;
        text-align: right;
        border-top: 1px solid #24282b;
        height: 35px;
        line-height: 35px;
        text-align:center;
        position: relative;
        @media all and (max-width: 1366px){
          height: 25px;
          line-height: 25px;
        }
        .block {
          flex-grow: 2;
          width: 0;
        }
        .number {
          flex-grow: 6;
          width: 0;
          font-family: Consolas,Monaco,monospace;
          span {
            color: #f4b940;
            font-weight: bolder
          }
        }
        .time {
          flex-grow: 2;
          width: 0;
        }
      }
      .arrows{
        position: absolute;
        right:-122px;
        div{
          height: 35px;
          color: #FFFFFF;
          background-color: #509a3c;
          padding: 0 11px;
          box-sizing: border-box;
          font-family: Consolas,Monaco,monospace;
          @media all and (max-width: 1366px){
            height: 25px;
          }
          &:before{
            content:"";
            border-color: transparent;
            border-right-color: #509a3c;
            border-width: 17.5px;
            border-right-width: 35px;
            border-style:solid;
            width:0;
            height:0;
            position:absolute;
            top:0px;
            left: -52.5px;
            @media all and (max-width: 1366px){
              border-width: 12.5px;
              border-right-width: 25px;
              left: -37.5px;
            }
          }
        }
      }
    }
  }
</style>
