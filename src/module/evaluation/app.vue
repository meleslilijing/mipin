<template>
  <div id="Evaluation">
  	<User></User>
    <div class="content">
      <div class="start-box">
        <Stars></Stars>  
      </div>
      <div>赞美一下</div>
      <div class="tags-box">
        <ul>
          <li v-for="tag in tags">
            <span>{{ tag }}</span>
          </li>
        </ul>
      </div>
    </div>
  	
  </div>
</template>

<script>
// 评价页
import User from 'components/User';
import Stars from 'components/Stars';

const Evaluation = {
  name: 'Evaluation',
  data() {
    return {
    	userImg: '../a.png',
      nickName: '陈敏娜',
      frequency: 121,				// 次数
      stars: 4,						// 分数
      tags: ['美丽大方', '自拍达人', '眼睛漂亮', '有责任心', '温柔体贴', '美丽大方', '换一换'],
      msg: '',
      msgPlaceHolder: '我一直想对你说',
      msgPrompt: 'TA还没有评价，赶快评价成为第一位评价者。',
      msgTags: ['我喜欢你', '晚上能早点睡吗...'],
    };
  },
  components: {
  	User,
  	Stars
  }
  
};

export default Evaluation;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

  body {
    background-color: #ccc;
  }
</style>