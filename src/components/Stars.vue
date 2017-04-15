<template>
  <div class="Stars">
    <div class="star-group" >
      <div class="star-gray-line star-line">
          <v-touch v-for="n in MAX_STAR" class="star star-gray" @tap="updateStar(n)"></v-touch>
      </div>
      <div class="star-light-line star-line">
          <v-touch v-for="n in stars" class="star star-light" @tap="updateStar(n)"></v-touch>  
      </div>  
    </div>
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
    updateStar(number) {
      this.stars = number;
    }
  }
};

export default Stars;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Stars {
    position: relative;
    height: 19px;
  }

  .Stars .star-group {
    position: relative;
    width: 140px;
    height: 19px;
    margin: 0 auto;
  }

  .Stars .star-group .star-line {
    position: absolute;
/*    text-align: left;
    left: 50%;
    top: 0;
    transform: translate3D(-50%, 0, 0);*/
  }

  .Stars .star-group .star-gray-line {
    z-index: 10;
  }
  .Stars .star-group .star-light-line {
    z-index: 11;
  }

  .Stars .star {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin-right: 9px;
    background-size: 19px 19px;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .Stars .star:last-child {
    margin-right: 0;
  }

  .Stars .star-light {
    background-image: url('/static/img/star.png');
  }

  .Stars .star-gray {
    background-image: url('/static/img/star-gray.png');

  }

  .Stars .star-big {
    display: inline-block;
    width: 26px;
    height: 26px;
    background: url('/static/img/star-big.png') no-repeat center center;
    background-size: 26px 26px;
  }

  .Stars .star-gray-big {
    display: inline-block;
    width: 26px;
    height: 26px;
    background: url('/static/img/star-gray-big.png') no-repeat center center;
    background-size: 26px 26px;
  }
</style>