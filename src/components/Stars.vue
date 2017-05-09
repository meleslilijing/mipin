<template>
  <div class="Stars">
    <div class="star-group" >
      <Star v-for="n in 5" 
        :color="background" 
        :size="size" 
        v-on:updateActivedCount="updateActivedCount"
        :index="n"
        :actived="n - 1 < score"
      >
      </Star>
    </div>
  </div>
</template>

<script>
// 用户组件 用户Cards
import Star from 'components/Star';

const Stars = {
  name: 'Stars',
  props: ['defaultScore', 'background', 'size'],
  data() {
    return {
      MAX_STAR: 5,
      text: '几乎完美',
      score: this.defaultScore || 0
    };
  },
  computed: {
    // activedCount() {
    //   console.log('score: ', this.score);
    //   return this.score || 0;
    // }
  },
  components: {
    Star
  },
  methods: {
    updateActivedCount(score) {
      const self = this;
      this.score = score;

      self.$emit('starsCallback', this.score);
    },
  }
};

export default Stars;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Stars {
    position: relative;
    /*height: 19px;*/
  }

  .Stars .star-group {
    position: relative;
    width: 200px;
    text-align: center;
    height: 26px;
    margin: 0 auto;
  }

  .Stars .star-group .star-line {
  }

  .Stars .star-group .star-bg-line {
    z-index: 10;
  }
  .Stars .star-group .star-light-line {
    z-index: 11;
    position: absolute;
  }

  .Stars .star {
    display: inline-block;
    margin-right: 9px;
  }

  .Stars .star:last-child {
    margin-right: 0;
  }
</style>