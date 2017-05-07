<template>
  <div id="TEST" class="page">
    测试页面
    <Tags :tags="tags"></Tags>
  </div>
</template>

<script>
// 评价页
import Star from 'components/Star';
import Tags from 'components/Tags';

const TEST = {
  name: 'TEST',
  data() {
    return {
      tags: [
        '美丽大方',
        '自拍达人',
        '眼睛漂亮1111',
        '有责任心',
        '温柔体贴温柔体贴温柔体贴温柔体贴',
        '美丽大方',
        '换一换'
      ]
    };
  },
  computed: {
    
  },
  components: {
  	Tags
  }
};

export default TEST;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

  #TEST {
    width: 50%;
    height: 100%;
    background: #ccc;
  }

</style>
