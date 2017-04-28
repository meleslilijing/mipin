<template>
  <div id="Danmu" class="page">
    <div class="page-title">
      <p>你好，匿名者</p>
    </div>

    <div class="user-info">
      <div class="avatar">
        <img v-show="!!avatarUrl" :src="avatarUrl" alt="用户头像">
      </div>
      <p class="nick-name">{{ nickName }}</p>
      <p class="evaluation-times">已收到{{ evaluationTimes }}次评论</p>
    </div>

    <div class="evaluation">
      <p>评分，评论均为匿名</p>
      <Stars :bg="'blue'" size="'big'"></Stars>
    </div>

    <div class="danmu-container" id="J-danmu-container"></div>
  </div>
</template>

<script>
// import $ from 'expose?$!jquery';
// require('../../assets/jquery.barrager/css/barrager.css');
// require('../../assets/jquery.barrager/js/jquery.barrager.js');

// 评价页
import Stars from 'components/Stars';

const Danmu = {
  name: 'Danmu',
  data() {
    return {
      nickName: '理敬',
      avatarUrl: '',
      evaluationTimes: 121,
      MAX_STARS: 5
    };
  },
  computed: {
    
  },
  components: {
  	Stars
  },
  mouted() {
    var item={
      img:'static/heisenberg.png', //图片 
      info:'弹幕文字信息', //文字 
      href:'http://www.yaseng.org', //链接 
      close:true, //显示关闭按钮 
      speed:8, //延迟,单位秒,默认8 
      bottom:70, //距离底部高度,单位px,默认随机 
      color:'#fff', //颜色,默认白色 
      old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
    }
    $('#J-danmu-container').barrager(item);
  }
};

export default Danmu;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

  #Danmu {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    background: url('/static/img/danmu-bg.png') no-repeat center center;
    background-size: 100%;
  }

  .page-title {
    margin-top : 25px;
    font-size: 19px;
    font-weight: bold;
  }

  .user-info {
    position: absolute;
    top: 215px;
    width: 100%;
  }

  .user-info .avatar {
    display: inline-block;
    width: 118px;
    height: 118px;
    border-radius: 50%;
    background: url('/static/img/danmu-user.png') no-repeat center center;
    background-size: 100%;
  }

  .evaluation {
    position: absolute;
    bottom: 38px;
    width: 100%;
    font-size: 12px;
  }

  .danmu-container {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 70%;
    background: rgba(255 , 255, 255, 0.5);
  }
</style>
