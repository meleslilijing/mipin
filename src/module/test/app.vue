<template>
  <div id="TEST" class="page">
    测试页面
    <div>
      <p>small</p>
      <Star :color="'gray'"></Star>
      <Star :color="'blue'"></Star>
      <Star :color="'light'"></Star>
    </div>
    <div>
      <p>big</p>
      <Star :color="'gray'"></Star>
      <Star :color="'blue'"></Star>
      <Star :color="'light'" :width="100"></Star>
    </div>
  </div>
</template>

<script>
// 评价页
import Star from 'components/Star';

const TEST = {
  name: 'TEST',
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  components: {
  	Star
  }
};

export default TEST;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

  #TEST {
    width: 100%;
    height: 100%;
    background: brown;
  }

</style>
