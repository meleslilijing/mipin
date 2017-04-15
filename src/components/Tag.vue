<template>
  <div class="Tag">
    <span>{{ text }}</span>
  </div>
</template>

<script>
// 用户组件 用户Cards

const Stars = {
  name: 'Tag',
  data() {
    return {
    	text: 'hahha'
    };
  },
};

export default Stars;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tag {
    position: relative;
  }

</style>