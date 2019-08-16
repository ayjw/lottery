<template>
  <div id="Betoption">
    <SelectSize/>
    <Submit/>
  </div>
</template>
<script>
import SelectSize from './SelectSize'
import Submit from './Submit'
import {mapState} from 'vuex'
export default {
  name: 'Betoption',
  components: {
    SelectSize,
    Submit
  },
  computed: mapState(['number'])
}
</script>

<style scoped lang='scss'>
  #Betoption {
    flex-grow:390;
    width: 0;
  }
</style>
