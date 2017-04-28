<template>
  <div class="Star" 
    v-bind:class="colorCls"
    v-bind:style="styleObj"
  >
  </div>
</template>

<script>
// 用户组件 用户Cards

const Star = {
  name: 'Star',
  props: ['color', 'width'],
  data() {
    return {}
  },
  computed: {
    colorCls() {
      return this.color
    },
    styleObj() {
      if(!this.width) return null;

      const w = this.width + 'px';
      return {
        width: w,
        height: w,
      }
    }
  }
};

export default Star;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Star {
    display: inline-block;
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
  }

  .light {
    background-image: url('/static/img/star.png');
  }

  .gray {
    background-image: url('/static/img/star-gray.png');
  }

  .blue {
    background-image: url('/static/img/star-blue.png');
  }
</style>