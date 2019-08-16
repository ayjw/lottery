<template>
  <div id="headerNav">
    <div class="lottery">
      <i></i>
    </div>
    <div class="feature clearFix">
      <button @click='openInfo' class="lt">{{$t('lang.nav')}}</button>
      <div class="rt dropDown" @click="isSetLang" v-clickoutside='intSet'>
        <p class="clearFix">
          <img :src="$t('lang.lang.img')" alt="">
          <span>{{$t('lang.lang.text')}}</span>
          <i></i>
        </p>
        <ul v-if='isSet'>
          <li class="clearFix" @click ="setLang('zh')">
            <img class="lt" src="./../../assets/img/cn.png" alt="">
            <span class="lt">中文</span>
          </li>
          <li class="clearFix" @click="setLang('en')">
            <img class="lt" src="./../../assets/img/en.png" alt="">
            <span class="lt">English</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="login">
      <button @click="login">{{user ? user:$t('lang.login')}}</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Header-nav',
  data: () => ({
    isSet: false
  }),
  computed: mapState(['user']),
  methods: {
    isSetLang () {
      this.isSet = !this.isSet
    },
    openInfo () {
      this.$store.commit('SET_GAME_INFO', true)
    },
    setLang (lang) {
      this.$i18n.locale = lang
    },
    intSet () {
      this.isSet = false
    },
    login () {
      this.$store.dispatch('LOGIN')
    }
  },
  directives: {
    clickoutside: {
      // 初始化指令
      bind (el, binding, vnode) {
        function documentHandler (e) {
          // 这里判断点击的元素是否是本身
          if (el.contains(e.target)) {
            return false
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value()
          }
        }

        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      update () {},
      unbind (el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }

  }
}
</script>

<style scoped lang="scss">
  #headerNav {
    width: 100%;
    height:79px;
    @media all and (max-width: 1366px){
      height:60px;
      font-size:12px;
    }
    background-color: #000000;
    display: flex;
    display: -webkit-box;

    .lottery {
      flex-grow: 1;
      height: 100%;
      padding-left:10.6%;
      box-sizing: border-box;
      i {
        width:179px;
        height: 100%;
        display: block;
        background: url('../../assets/img/logo.png') 0 50% no-repeat;
      }
    }
    .feature {
      flex-grow: 10;
      width: 0;
      button {
        height: 24px;
        line-height: 24px;
        color: #FFFFFF;
        margin:27.5px 0 0 30px;
        @media all and (max-width: 1366px){
          height: 18px;
          line-height:18px;
          color: #FFFFFF;
          margin:21px 0 0 23px;
          font-size: 12px;
        }
      }
      .dropDown {
        height: 30px;
        margin: 24.5px 0 0 50px;
        @media all and (max-width: 1366px){
          margin:15px 0 0 18px;
        }
        color: #FFFFFF;
        position: relative;
        cursor: pointer;
        p {
          height: 100%;
          img {
            margin: 5px 10px ;
            float: left;
          }
          span {
            display: block;
            line-height: 30px;
            float: left;
          }
          i {
            width: 9px;
            height:100%;
            display: block;
            float: left;
            margin-left: 10px;
            background: url('./../../assets/img/dropSign.png')0 50% no-repeat;
          }
        }
        ul {
          position: absolute;
          width: 200px;
          top:54.5px;
          background-color: #000000;
          li {
            height: 30px;
            img {
              margin: 5px 10px;
            }
            span {
              display: block;
              line-height: 30px;
            }
          }
        }
      }
    }
    .login {
      width: 195px;
      display: flex;
      display: -webkit-flex;
      justify-content:flex-end;
      button {
        width: 95px;
        height: 30px;
        background-color: #509a3c;
        border-radius: 5px;
        line-height:30px;
        color: #ffffff;
        margin: 24.5px 50px;
        @media all and (max-width: 1366px){
          width: 72px;
          height: 22px;
          line-height: 22px;
          margin: 19px 50px;
          font-size: 12px;
        }
      }
    }
  }

/*--------------  1199*/
@media all and (max-width: 1366px){

}

/*-------------- 992 pad*/
@media all and (max-width: 992px){}

/*-------------- 767  phone*/
@media all and (max-width: 767px){}

/*---iphone6*/
@media all and (max-width: 377px){}

/*---iphone-5*/
@media all and (max-width: 322px){}
</style>
