<template>
  <div id="Evaluation" class="page">
    <div class="header">
      <User></User>
    </div>
  	
    <div class="content">
      
      <div class="star-box">
        <Stars></Stars>
        <p class="star-desc">几乎完美</p>
      </div>

      <div class="diving-line">
        <div class="desc">赞美一下</div>
      </div>
      
      <!-- <div class="tags-box">
        <ul>
          <li v-for="(item, index) in tags">
            <Tag 
              :message="item.text" 
              :type="item.type">
            </Tag>
          </li>
        </ul>
      </div> -->

      <Tags :tags="tags"></Tags>

      <div class="text-area">
        <textarea placeholder="我一直相对你说: " v-model="message"></textarea>
        <div v-if="!message.length" class="toast"></div>
      </div>

      <div class="content-footer">
        <p class="submit-tips">评分、评价均为匿名</p>
        <a href="" class="submit-link" :disabled="!message.length">匿名提交评价</a>
      </div>
    </div>
  </div>
</template>

<script>
// 评价页
import User from 'components/User';
import Stars from 'components/Stars';
import Tags from 'components/Tags';
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
        { text: '眼睛漂亮', type:'private' },
        { text: '有责任心', type:'private' },
        { text: '温柔体贴' },
        { text: '美丽大方' },
        { text: '换一换' }
      ],
      message: '',      // textarea 内容
      msgPlaceHolder: '我一直想对你说',
      msgPrompt: 'TA还没有评价，赶快评价成为第一位评价者。',
      msgTags: ['我喜欢你', '晚上能早点睡吗...'],
    };
  },
  computed: {
    
  },
  components: {
  	User,
  	Stars,
    Tags,
    Tag
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
