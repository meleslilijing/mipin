<template>
  <div id="Evaluation" class="page">
  	<User></User>
    <div class="content">
      
      <div class="star-box">
        <Stars></Stars>
        <p class="star-desc">几乎完美</p>
      </div>

      <div class="diving-line">
        <div class="desc">赞美一下</div>
      </div>
      
      <div class="tags-box">
        <ul>
          <li v-for="(item, index) in tags">
            <Tag :message="item.text"></Tag>
          </li>
        </ul>
      </div>

      <div class="text-area">
        <textarea placeholder="我一直相对你说: " v-model="message"></textarea>
        <div class="toast"></div>
      </div>
11: {{message}}
disabled: {{disabled}}
      <div class="content-footer">
        <p class="submit-tips">评分、评价均为匿名</p>
        <a href="" class="submit-link" :disabled="message">匿名提交评价</a>
      </div>
    </div>

    
  	
  </div>
</template>

<script>
// 评价页
import User from 'components/User';
import Stars from 'components/Stars';
import Tag from 'components/Tag';

const Evaluation = {
  name: 'Evaluation',
  data() {
    return {
    	userImg: '../a.png',
      nickName: '陈敏娜',
      frequency: 121,				// 次数
      stars: 4,						// 分数
        tags: [
          { text: '美丽大方' },
          { text: '自拍达人' },
          { text: '眼睛漂亮' },
          { text: '温柔' },
          { text: '眼睛漂亮' },
          { text: '眼睛漂亮，人也好看' },
          { text: '很贪吃' }
        ],
      message: '',      // textarea 内容
      msgPlaceHolder: '我一直想对你说',
      msgPrompt: 'TA还没有评价，赶快评价成为第一位评价者。',
      msgTags: ['我喜欢你', '晚上能早点睡吗...'],
    };
  },
  // watch: {
  //   disabled() {
  //     this.disabled = this.message.length === 0 ? 'disabled' : 'nonono'
  //   }
  // },
  computed: {
    disabled() {
      return this.message.length === 0 ? 'disabled' : 'nonono'
    }
  },
  components: {
  	User,
  	Stars,
    Tag
  }
};

export default Evaluation;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

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
  }

  .diving-line .desc::before {
    content: ' ';
    position: relative;
    right: 16px;
    display: inline-block;
    vertical-align: middle;
    width: 66px;
    height: 1px;
    background-color: #1a0000;
  }

  .diving-line .desc::after {
    content: ' ';
    position: relative;
    left: 16px;
    display: inline-block;
    vertical-align: middle;
    width: 66px;
    height: 1px;
    background-color: #1a0000;
  }

  /*.diving-line .line {
    display: inline-block;
    width: 66px;
    height: 1px;
    background-color: #1a0000;
  }*/

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
  }

  .content .toast {
    position: absolute;
    top: 23px;
    left: 8px;
    width: 181px;
    height: 36px;
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
    color: rgba(0, 0, 0, .3);
  }

  .content-footer .submit-link {
    display: block; 
    width: 100%;
    height: 42px;
    line-height: 42px;
    font-size: 15px;
    background: yellow;
  }

  .content-footer .submit-link[disabled='disabled'] {
    background: gray;
  }

</style>
