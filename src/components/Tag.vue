<template>
  <div class="Tag">
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
    margin-right: 10px;
    float: left;
    padding: 12px 8px;
    font-size: 12px;
    color: rgba(0, 0, 0, .6);
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 22px;
  }

  .Tag:after {
  	margin-right: 0;
  }

</style>