<template>
  <div id="Danmu" class="page">
    <div class="page-title">
      <p>你好，匿名者</p>
    </div>

    <div class="user-info">
      <div class="avatar">
        <img v-show="!!avatarUrl" :src="avatarUrl" alt="用户头像">
        <i class="user-score">{{ rateScoreComputed }}</i>
      </div>
      <p class="nick-name">{{ nickName }}</p>
      <p class="evaluation-times">已收到{{ rateCount }}次评论</p>
    </div>

    <div class="evaluation">
      <p>评分，评论均为匿名</p>
      <Stars 
        background="blue" 
        size="big" 
        v-on:callback="changeResultPage"
      ></Stars>
    </div>

    <div class="danmu-container" id="J-danmu-container">
    </div>
  </div>
</template>

<script>
// import $ from 'expose?$!jquery';
// require('../../assets/jquery.barrager/css/barrager.css');
// require('../../assets/jquery.barrager/js/jquery.barrager.js');

import { Api, Location } from '../../utils'

// 评价页
import Stars from 'components/Stars';

const DanmuCenter = {
  _container: $('body'),
  setContainer(dom) {
    this._container = dom;
  },
  _speed: 700,  // 数字越大出弹幕的速度越慢
  _emmitDanmu() {
    const bottom = this._random();
    const item = this._itemCreater(bottom, bottom);

    const container = this._container;
    container.barrager(item);
  },
  _itemCreater(bottom, text ) {
    return {
      // img:'static/heisenberg.png', //图片 
      info: text, //文字 
      // href:'http://www.yaseng.org', //链接 
      // close:true, //显示关闭按钮 
      speed: 8, //延迟,单位秒,默认8 
      bottom: bottom, //距离底部高度,单位px,默认随机 
      color:'#fff', //颜色,默认白色 
    }
  },
  _random() {
    const MAX_HEIGHT = this._container[0].offsetHeight-50;  // 50为弹幕高度
    return parseInt(Math.random() * MAX_HEIGHT);
  },
  test() {
    const self = this;
    setInterval(() => {
      self._emmitDanmu();
    }, self._speed);
  }
}

const Danmu = {
  name: 'Danmu',
  data() {
    return {
      nickName: '未知用户',
      avatarUrl: '',
      rateScore: 0,
      rateCount: 0,
      MAX_STARS: 5
    };
  },
  computed: {
    rateScoreComputed() {
      let r = (+this.rateScore).toFixed(2);
      const temp = r.split('.');
      if (temp[1]) {
        r = temp[0]+'.0';
      }
      return r;
    }
  },
  components: {
  	Stars
  },
  mounted() {
    this.queryUserInfoByNumber();
  },
  methods: {
    queryUserInfoByNumber() {
      const phoneNumber = '123456';

      const self = this;

      Api.queryUserInfoByNumber({
          phoneNumber
        })
        .then(res => {
          const { 
            avatarUrl, 
            nickName, 
            phoneNumber, 
            rateScore,
            rateCount,
            userId,
            userType
          } = res;

          self.nickName = nickName;
          self.rateScore = rateScore;
          self.avatarUrl = avatarUrl;
          self.rateCount = rateCount;

          DanmuCenter.setContainer($('#J-danmu-container'));
          DanmuCenter.test();
        });
    },
    changeResultPage(score) {
      const self = this;
      const params = {
        nickName: self.nickName,
        rateCount: self.rateCount,
        rateScore: self.rateScoreComputed,
        avatarUrl: self.avatarUrl,
        score: score
      }

      const formatParams = Location.formatParams;

      const origin = window.location.origin;
      const pathname = (() => {
          let r = '/evaluation_result'; 
          if(process.env.NODE_ENV === 'development') {
            r = r + '.html';
          }
          return r;
        })(); 

      const url = origin + pathname + '?' + formatParams(params);

      window.location.href = url;

    }
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
    position: relative;
    display: inline-block;
    width: 103px;
    height: 103px;
    border-radius: 50%;
    background: url('/static/img/danmu-user.png') no-repeat center center;
    background-size: 100%;
  }

  .user-info .avatar > img {
    width: 100%;
  }

  .user-info .nick-name {
    margin-top: 13px;
    font-size: 16px;
    font-weight: bold;
  }

  .user-info .evaluation-times {
    margin-top: 12px;
    font-size: 12px;
  }

  .evaluation {
    position: absolute;
    bottom: 60px;
    width: 100%;
    font-size: 12px;
  }
  
  .evaluation > p {
    margin-bottom: 15px;
  }

  .danmu-container {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 70%;
    /*background: rgba(255 , 255, 255, 0.5);*/
  }

  .user-score {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 12px;
    line-height: 12px;
    padding: 0 5px;
    color: white;
    background-color: #fcbf2e;
    font-size: 12px;
    font-style: normal;
    border-radius: 9px;
    border: 1px solid #e9a432;
  }
</style>


<!-- 
var item={
      img:'static/heisenberg.png', //图片 
      info:'弹幕文字信息', //文字 
      href:'http://www.yaseng.org', //链接 
      close:true, //显示关闭按钮 
      speed:8, //延迟,单位秒,默认8 
      bottom:170, //距离底部高度,单位px,默认随机 
      color:'#fff', //颜色,默认白色 
    }
    // $('#J-danmu-container').barrager(item);
    const $container = $('.danmu-container').barrager(item); -->