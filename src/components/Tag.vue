<template>
  <!-- <v-touch @tap="handleClick"> -->
    <div class="Tag Tag-default" :class="clicked">
      <span>{{ text }}</span>
    </div>  
  <!-- </v-touch> -->
</template>

<script>
// 用户组件 用户Cards
// type: default private
const Tag = {
  name: 'Tag',
	props: ['text'],
  data() {
    return {
      clicked: ''
    };
  },
  // methods: {
  //   handleClick() {
  //     this.clicked = 'Tag-clicked'
  //   }
  // }
};

export default Tag;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tag {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    float: left;
    width: 70px;
    height: 26px;
    line-height: 26px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, .8);
    border-radius: 21px;
  }

  .Tag-default {
    border: 1px solid #e5e5e5;
  }

  .Tag-clicked {
    background-color: #1191e0;
    color: white;
  }

  .Tag:after {
  	margin-right: 0;
  }

</style>