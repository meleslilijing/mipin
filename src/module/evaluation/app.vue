<template>
  <div id="Evaluation" class="page">
    <div class="header">
      <User 
        :nickName="user.nickName" 
        :rateCount="user.rateCount" 
        :rateScore="user.rateScore"
        :avatarUrl="user.avatarUrl"
        ></User>
    </div>
  	
    <div class="content">
      
      <div class="star-box">
        <Stars :defaultScore="rateScore" v-on:starsCallback="starsCallback"></Stars>
        <p class="star-desc">{{ tags.title }}</p>
      </div>

      <div class="diving-line">
        <div class="desc">赞美一下</div>
      </div>

      <Tags :dataSource="tags.tags" :activeSet="activeSet" :tagsCallback="tagsCallback"></Tags>

      <div class="text-area">
        <textarea placeholder="我一直相对你说: " v-model="comment"></textarea>
        <div v-if="!comment.length" class="toast"></div>
      </div>

      <div class="content-footer">
        <p class="submit-tips">评分、评价均为匿名</p>
        <a class="submit-link" :disabled="!comment.length">
          <v-touch @tap="submit">
            匿名提交评价
          </v-touch>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
// 评价页
import User from 'components/User';
import Stars from 'components/Stars';
import Tags from 'components/Tags';

import { Api, Location } from '../../utils'

const DEFAULT_RATE = 0;
const RATEE_NUMBER = ''; // 被评价者手机号 怎么获得

const Evaluation = {
  name: 'Evaluation',
  data() {
    return {
      user: {
        avatarUrl: '',
        nickName: '陈敏娜',
        rateCount: 121,
        rateScore:"0"  
      },
      rateScore: DEFAULT_RATE,  // 星星数量
      rateTags: [
        {
            "rate": "0",                   // 评级对应的数字
            "title": "人品一般般",           // 评级对应的标题
            "tags": [
              '帅哥',
            ]  
        },
        {
            "rate": "1",                          
            "title": "人品一般",
            "tags": [
              '帅哥',
              '土豪',
            ]
        },
        {
            "rate": "2",                          
            "title": "人品还行",
            "tags": [
              '帅哥',
              '土豪',
              '神经质'
            ]
        },
        {
            "rate": "3",                          
            "title": "人品不错",
            "tags": [
              '帅哥',
              '土豪',
              '神经质',
              '温柔'
            ]
        },
        {
            "rate": "4",                          
            "title": "人品很不错",
            "tags": [
              '帅哥',
              '土豪',
              '神经质',
              '温柔',
              '大方'
            ]
        },
        {
            "rate": "5",
            "title": "人品很好",
            "tags": [
              '帅哥',
              '土豪',
              '神经质',
              '温柔',
              '大方',
              '人品非常好'
            ]
        }
      ],
      MAX_ACTIVATE: 3,
      activeSet: new Set(), 
      comment: ''      // textarea 内容
    };
  },

  computed: {
    // actived() {
    //   return [...this.activeSet];
    // },
    // 激活标签 String
    activeTagsString() {
      const self = this;

      const list = [...this.activeSet];

      return list
        .map(index => self.tags.tags[index])
        .join('\\001');
    },
    // tags数据
    tags() {
      const self = this;
      const tags = {};

      // 选取当前的 star 对应的数据
      const current = this.rateTags.filter(rateTag => {
        return rateTag.rate == self.rateScore;
      })[0];

      return current;
    }
  },
  methods: {
    _setRateScore(rateScore) {
      this.rateScore = rateScore;
      this.activeSet = new Set();
    },
    queryUserInfoByNumber() {
      const self = this;

      return Api.queryUserInfoByNumber({
          // 被评价者的手机号
          phoneNumber: NativeInterface.phoneNumber
        })
        .then(response => {
          console.log('queryUserInfoByNumber response: ', response);

            const {
              avatarUrl,
              nickName,
              rateScore,
              rateCount,

              userType, // 暂未使用
              userId, // 暂未使用
              phoneNumber, // 暂未使用
            } = response;

            self.user.avatarUrl = avatarUrl;
            self.user.nickName = nickName;
            self.user.rateCount = rateCount;
            self.user.rateScore = rateScore;
        })
    },
    queryRateTagsByNumber() {
      const self = this;

      return Api.queryRateTagsByNumber({
          // 被评价者的手机号
          phoneNumber: NativeInterface.phoneNumber
        })
        .then(response => {
          console.info('queryRateTagsByNumber response：', response);


        })
    },
    submit() {
      const self = this;

      const params = {
        raterNumber: NativeInterface.phoneNumber,  // 评价者手机号
        rateeNumber: 'test-rateeNumber',  // 被评价者手机号
        rateeName: 'test-rateeName',      // 被评价者姓名
        rate: self.rateScore,
        tags: self.activeTagsString,
        comment: self.comment,
        sendMms: true, // 是否发送短信
        phones: NativeInterface.phoneNumber
      }

      Api.submitRateContent(params)
        .then(result => {
          const { beforeRateDetailScore, afterRateDetailScore, rateCount } = result;

          Location.redirect.evaluation_result({
            beforeRateDetailScore, 
            afterRateDetailScore,
            rateCount
          });
        })
    },
    starsCallback(stars) {
      this._setRateScore(stars);
    },
    tagsCallback(index) {
      const activeSet = this.activeSet;
      const actived = activeSet.has(index);

      // 已激活
      if (actived) {
        activeSet.delete(index);
      }
      else {

        const size = activeSet.size;
        if (size < this.MAX_ACTIVATE) {
          activeSet.add(index);
        }
      }

      this.activeSet = new Set([...activeSet]);
    }
  },

  created() {
    this.queryUserInfoByNumber(); // 查询用户信息
    this.queryRateTagsByNumber(); // 查询用户标签
  },
  
  components: {
  	User,
  	Stars,
    Tags,
  }
};

export default Evaluation;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';
  .header {
    margin-top: 17px;
  }

  .content {
    position: relative;
    overflow: auto;
    height: 500px;
    background-color: white;
    margin-top: 10px;
    text-align: center;
  }

  .content > .star-box {
    text-align: center;
    margin-top: 20px;
  }

  .star-box .star-desc {
    font-size: 11px;
    color: #f75e13;
    margin-top: 13px;
  }

  .content > .diving-line {
    margin-top: 25px
  }

  .diving-line .desc {
    font-size: 11px;
    padding: 0 16px;
    color: rgba(0, 0, 0, .7);
  }

  .diving-line .desc::before {
    content: ' ';
    position: relative;
    right: 16px;
    display: inline-block;
    vertical-align: middle;
    width: 66px;
    height: 1px;
    background-color: #eee;
  }

  .diving-line .desc::after {
    content: ' ';
    position: relative;
    left: 16px;
    display: inline-block;
    vertical-align: middle;
    width: 66px;
    height: 1px;
    background-color: #eee;
  }
  .content > .tags-box {
    overflow: auto; 
    margin-top: 20px;
    text-align: center;
    padding: 0 1em;
  }

  .content > .text-area {
    position: relative;
    margin: 24px 10px 0;
  }

  .content .text-area textarea {
    height: 133px;
    border-color: #f5f5f5;
    padding: 9px 8px;
  }

  .content .toast {
    position: absolute;
    top: 23px;
    left: 8px;
    width: 271px;
    height: 54px;
    background: url('/static/img/textarea-toast.png') no-repeat center center;
    background-size: 100%;
  }

  .content > .content-footer {
    position: absolute;
    overflow: auto;
    width: 100%;
    bottom: 10px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .content-footer .submit-tips {
    text-align: center;
    font-size: 12px;
    color: rgba(0, 0, 0, .5);
  }

  .content-footer .submit-link {
    display: block; 
    width: 100%;
    height: 42px;
    line-height: 42px;
    margin-top: 10px;
    font-size: 16px;
    background: #ffd800;
    border-radius: 3px;
  }

  .content-footer .submit-link[disabled='disabled'] {
    background: #ebb600;
  }

</style>
