<template>
  <div class="Tag Tag-default">
    <span>{{ message }}</span>
  </div>
</template>

<script>
// 用户组件 用户Cards
// type: default private
const Tag = {
  name: 'Tag',
	props: ['message'],
  data() {
    return {
    };
  },
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
    height: 26px;
    line-height: 26px;
    margin-right: 10px;
    padding: 0 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, .8);
    border-radius: 13px;
  }

  .Tag-default {
    border: 1px solid #e5e5e5;
  }

  .Tag:after {
  	margin-right: 0;
  }

</style>