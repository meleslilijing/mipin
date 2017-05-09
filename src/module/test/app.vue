<template>
  <div id="TEST" class="page">
    测试页面
    <Stars></Stars>
  </div>
</template>

<script>
// 评价页
import Stars from 'components/Stars';

const TEST = {
  name: 'TEST',
  data() {
    return {
     
    };
  },
  computed: {
    
  },
  components: {
  	Stars
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
