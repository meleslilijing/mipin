<template>
  <div id="EvaluationResult" class="page">
    <div class="content">
      <User></User>
    </div>
  </div>
</template>

<script>
// 评价页
import User from 'components/User';
import Stars from 'components/Stars';
import Tag from 'components/Tag';

const EvaluationResult = {
  name: 'EvaluationResult',
  data() {
    return {
    	
    };
  },
  components: {
  	User,
  	Stars,
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
</style>
