<template>
  <v-touch @tap="handleClick" class="Tag Tag-default" :class="activedCls">
    <span>{{ text }}</span>
  </v-touch>
</template>

<script>
// 用户组件 用户Cards
// type: default private
const Tag = {
  name: 'Tag',
	props: ['text', 'actived', 'index'],
  data() {
    return {
    };
  },
  computed: {
    activedCls() {
      return (this.actived ? 'Tag-clicked' : '');
    }
  },
  methods: {
    handleClick() {
      this.$emit('tagsCallback', this.index);
    }
  }
};

export default Tag;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tag {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 26px;
    line-height: 24px;
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
    border-color: #1191e0;
    color: white;
  }

  .Tag:after {
  	margin-right: 0;
  }

</style>