import Vue from 'vue'
import Vuex from 'vuex'
import Eos from 'eosjs'
import network from '../assets/common/network'
import {Message} from 'element-ui'
import ScatterJS from 'scatterjs-core'
import ScatterEOS from 'scatterjs-plugin-eosjs'
ScatterJS.plugins(new ScatterEOS())
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    isGameInfo: false,
    LotteryRecord: [],
    number: [],
    historyLast: '123',
    issue: '1812240805',
    memo: '',
    BetAmount: '1.0000'
  },
  getters: {},
  mutations: {
    SET_USER: (state, data) => { state.user = data },
    SET_GAME_INFO: (state, data) => { state.isGameInfo = data },
    LOTTERY_RECORD_UNSHIFT (state, data) {
      state.LotteryRecord.unshift(data)
      // state.historyRecord.unshift(data)
      // state.historyRecord.splice(10, state.historyRecord.length)
      state.LotteryRecord.splice(9, state.LotteryRecord.length)
    },
    LOTTERY_RECORD_PUSH (state, data) {
      state.LotteryRecord.push(data)
      state.LotteryRecord.splice(9, state.LotteryRecord.length)
    },
    LOTTERY_RECORD_LAST (state, data) {
      state.historyLast = data.result
    },
    SET_NUMBER (state, num) {
      if (state.number.includes(num)) return
      if (state.number.length > 2) return
      state.number.push(num)
    },
    SET_RESET: (state) => { state.number.splice('') },
    SET_BETAMOUNT: (state, data) => { state.BetAmount = data }
  },
  actions: {
    LOGIN ({commit, state}) {
      ScatterJS.scatter.connect('My-App').then(connected => {
        if (!connected) {
          return Message({
            showClose: true,
            message: '请下载Scatter插件！'
          })
        }
        const req = {accounts: [network]}
        if (state.user) {
          return Message({
            type: 'error',
            message: '账户已登录'
          })
        }
        ScatterJS.scatter.getIdentity(req).then(() => {
          const account = ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos')
          commit('SET_USER', account.name)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    SUBMIT ({commit, state}, data) {
      ScatterJS.scatter.connect('My-App').then(connected => {
        if (!connected) {
          return Message({
            showClose: true,
            message: '请下载Scatter插件！'
          })
        }
        const requiredFields = {accounts: [network]}
        ScatterJS.scatter.getIdentity(requiredFields).then(() => {
          const account = ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos')
          if (!state.user) commit('SET_USER', account.name)
          const eosOptions = {expireInSeconds: 60}
          const eos = ScatterJS.scatter.eos(network, Eos, {eosOptions})
          const transactionOptions = {authorization: [`${account.name}@${account.authority}`]}
          eos.transfer(account.name, 'bob', `${state.BetAmount} EOS`, data, transactionOptions).then(trx => {
            Message.success('投注成功')
          }).catch(error => {
            Message.error('投注失败，请稍后重试')
            console.log(error)
          })
        }).catch(error => {
          console.log('error', error)
        })
      })
    }
  }
})
export default store
