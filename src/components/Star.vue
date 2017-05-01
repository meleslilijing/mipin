<template>
    <div class="Star" 
      :class="[colorCls, sizeCls, activedCls]"
    >
      <v-touch @tap="updateActivedStars" style="height: 100%"></v-touch>
    </div>  
  
</template>

<script>
// 用户组件 用户Cards

const Star = {
  name: 'Star',
  props: ['color', 'size', 'index', 'actived'],
  data() {
    return {
    }
  },
  computed: {
    colorCls() {
      if(this.color === 'blue') {
        return 'star-color-blue';
      }
      return 'star-color-gray';
    },
    sizeCls() {
      if(this.size === 'big') {
        return 'star-size-big'
      }
    },
    activedCls() {
      if(this.actived) {
        return 'star-actived';
      }
    }
  },
  methods: {
    updateActivedStars() {
      this.$emit('updateActivedCount', this.index)
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

  .star-actived {
    background-image: url('/static/img/star.png')!important;
  }

  .star-color-gray {
    background-image: url('/static/img/star-gray.png');
  }

  .star-color-blue {
    background-image: url('/static/img/star-blue.png');
  }

  .star-size-big {
    width: 26px;
    height: 26px;
    margin-right: 17px;
    background-size: 100%;
  }

  .Star:last-child {
    margin-right: 0;
  }
</style>