<template>
  <div id="EvaluationResult" class="page">
    <div class="content">
      <User
        :nickName="user.nickName"
        :rateCount="user.rateCount"
        :rateScore="user.rateScore"
        :avatarUrl="user.avatarUrl"
      ></User>
      
      <!-- <div class="line-container"> -->
        <LineText></LineText>
      <!-- </div> -->

      <div class="score-group">
        <span class="score">{{ score }}</span>
        <sup class="sub-score">{{ subScore }}</sup>
      </div>
      <Stars :defaultScore="intScore" size="big"></Stars>
    </div>
    <p class="tips">恭喜你成为第<span>{{ this.hasSubmit.rateCount }}</span>位评论者</p>
  </div>
</template>

<script>
import { Api, Location } from '../../utils'

// 评价页
import User from 'components/User';
import Stars from 'components/Stars';
import LineText from 'components/LineText';

const EvaluationResult = {
  name: 'EvaluationResult',
  data() {
    return {
      user: {
        nickName: '',  
        rateCount: 0, // 人物评价次数
        rateScore: 0, // 人物评分
        avatarUrl: '',  
      },
      hasSubmit: {
        beforeRateDetailScore: 0,
        afterRateDetailScore: 4,
        rateCount: 0
      },
      score: 0,       // 星星
    };
  },
  computed: {
    score() {
      let r = Number(this.hasSubmit.afterRateDetailScore);

      return r;
    },
    subScore() {
      let r = Number(this.hasSubmit.afterRateDetailScore - this.hasSubmit.beforeRateDetailScore);

      let symbol = '+';

      if(r < 0) {
        symbol = '-';
        r = -r;
      }

      return symbol + r.toString().slice(0, 8);
    },
    intScore() {
      let r = parseInt(Number(this.hasSubmit.afterRateDetailScore));
      return r;
    }
  },
  components: {
  	User,
    Stars,
    LineText
  },
  created() {
    this._init();
    this.setScores();
  },
  methods: {
    _init() {
      const { nickName, rateCount, rateScore, avatarUrl, score } = Location.unformatParams();
      
      const user = {};

      user.nickName = nickName;
      user.rateCount = rateCount;
      user.rateScore = rateScore;
      user.avatarUrl = avatarUrl;
      user.score = score;  

      this.user = user;
    },
    setScores() {
      const self = this;

      Api.submitRateContent()
        .then(res => {
          console.log('res: ', res);

          const { beforeRateDetailScore, afterRateDetailScore, rateCount } = res;

          const target = self.hasSubmit;

          target.beforeRateDetailScore = beforeRateDetailScore;
          target.afterRateDetailScore = afterRateDetailScore;
          target.rateCount = rateCount;
        })
    }
  }
  
};

export default EvaluationResult;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';
  
  .content {
    position: relative;
    overflow: auto;
    height: 500px;
    background-color: white;
  }

  .tips {
    text-align: center;
    font-size: 14px;
    color: rgba(0, 0, 0, .8);
    margin-top: 16px;
  }

  .tips::before {
    content: ' ';
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 7px;
    background: url('/static/img/tick.png') no-repeat center center;
    background-size: 100%;
  }

  .tips span {
    margin: 6px;
    color: #f75922;
  }

  .score-group {
    margin-top: 33px;
    text-align: center;
    line-height: 1;
  }

  .score-group .score {
    font-size: 33px;
    color: #f75922;
  }

  .score-group .sub-score {
    height: 12px;
    font-size: 12px;
    line-height: 1;
    padding: 2px;
    vertical-align: top;
    color: white;
    background-color: #f75922;
    border-radius: 10px;
  }

  /*.line-container {
    margin-top: 25px;
  }*/
/*
  .diving-line {
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
  }*/
</style>
