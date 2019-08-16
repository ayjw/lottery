<template>
    <div class="gameInfo-box">
        <div class="gameInfo">
            <h2>{{$t('lang.info.title[0]')}}</h2>
            <ul>
                <li>{{$t('lang.info.content[0]')}}</li>
            </ul>
            <h2>{{$t('lang.info.title[1]')}}</h2>
            <ul>
                <li>{{$t('lang.info.content[1]')}}</li>
            </ul>
            <h2>{{$t('lang.info.title[2]')}}</h2>
            <ul>
                <li>{{$t('lang.info.content[2]')}}</li>
                <li>{{$t('lang.info.content[3]')}}</li>
                <li>{{$t('lang.info.content[4]')}}</li>
                <li>{{$t('lang.info.content[5]')}}</li>
                <li>{{$t('lang.info.content[6]')}}</li>
                <li>{{$t('lang.info.content[7]')}}</li>
            </ul>
            <h2>{{$t('lang.info.title[3]')}}</h2>
            <ul>
                <li>{{$t('lang.info.content[8]')}}</li>
                <li>{{$t('lang.info.content[9]')}}</li>
            </ul>
            <p>{{$t('lang.info.content[10]')}}</p>
            <span class="button" @click="returnFn">{{$t('lang.info.return')}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gameInfo',
  methods: {
    returnFn () {
      this.$store.commit('SET_GAME_INFO', false)
    }
  }
}
</script>

<style scoped lang="scss">
  .gameInfo-box {
      margin: 60px auto 0;
      padding-top: 93px;
      width: 850px;
      background: rgba(14, 18, 39, 1);
      border-radius: 10px;
      .gameInfo {
        position: relative;
        padding: 20px 80px 70px;
        border-radius: 0 0 10px 10px;
        background: rgba(228, 229, 236, 1);
        h2 {
            font-size: 22px;
            color: rgba(14, 18, 39, 1);
        }
        li {
            font-size:18px;
            line-height: 30px;
            text-indent: 2em;
        }
        .button {
          position: absolute;
          right: 94px;
          bottom:10px;
          cursor: pointer;
          width: 200px;
          height: 50px;
          text-align: center;
          font-size: 24px;
          color:#FFFFFF;
          line-height:50px;
          background-color: #509a3c;
          border-radius: 5px;
        }
      }
  }
</style>
