<template>
  <div class="LineText">
      <div class="diving-line">
        <div class="desc">TA的分数</div>
      </div>
  </div>
</template>

<script>
// import { Api, Location } from '../../utils'

// console.log(Location)

// // 评价页
// import User from 'components/User';
// import Stars from 'components/Stars';
// // import Tag from 'components/Tag';

const LineText = {
  name: 'LineText',
  data() {
    return {};
  },
};

export default LineText;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .diving-line {
    /*margin-top: 25px*/
    position: relative;
    vertical-align: middle;
    width: 100%;
    height: 1px;
    background-color: #eee;
  }

  .diving-line .desc {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 16px;
    background-color: white;
    font-size: 12px;
    color: rgba(0, 0, 0, .7);
    transform: translate3d(-50%, -50%, 0);
  }
</style>
