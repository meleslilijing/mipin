<template>
  <div class="Stars">
    <div class="star-bg">
        <v-touch v-for="n in MAX_STAR" class="star-gray" @tap="updateStar(n)" @swipe="updateStar(n)"></v-touch>
    </div>
    <div class="star-star">
        <v-touch v-for="n in stars" class="star" @tap="updateStar(n)"></v-touch>  
    </div>
    <v-touch 
      v-on:swipeleft="onswipe"
    >
      1111111111111111111
    </v-touch>
  </div>
</template>

<script>
// 用户组件 用户Cards

const Stars = {
  name: 'Stars',
  data() {
    return {
    	stars: 2,
      MAX_STAR: 5,
      text: '几乎完美'
    };
  },
  methods: {
    addStart() {
      ++this.stars;
    },

    minusStart() {
      --this.stars;
    },

    updateStar(number) {
      this.stars = number;
    },
    onswipe() {
      console.log('swipe')
    }
  }
  
};

export default Stars;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Stars {
    position: relative;
  }

  .star-star {
    position: absolute;
    top: 0;
    left: 0;
  }

  .star {
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url('/static/img/star.png') no-repeat center center;
    background-size: 19px 19px;
  }

  .star-gray {
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url('/static/img/star-gray.png') no-repeat center center;
    background-size: 19px 19px;
  }

  .star-big {
    display: inline-block;
    width: 26px;
    height: 26px;
    background: url('/static/img/star-big.png') no-repeat center center;
    background-size: 26px 26px;
  }

  .star-gray-big {
    display: inline-block;
    width: 26px;
    height: 26px;
    background: url('/static/img/star-gray-big.png') no-repeat center center;
    background-size: 26px 26px;
  }
</style>