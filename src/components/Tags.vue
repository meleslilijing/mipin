<template>
  <div class="Tags">
    <Tag v-for="(tag, index) in dataSource"
      :text="tag" 
      :index="index" 
      :actived="_checkActive(index)"
      v-on:tagsCallback="tagsCallback"
    >
    </Tag>
  </div>
</template>

<script>
import Tag from './Tag';

/*
  eg..
      tags: [
        { text: '美丽大方' },
        { text: '自拍达人' },
        { text: '眼睛漂亮' },
        { text: '有责任心' },
        { text: '温柔体贴' },
        { text: '美丽大方' },
        { text: '换一换' }
      ],
 */
const Tags = {
  name: 'Tags',
	props: ['dataSource', 'activeSet', 'tagsCallback'],
  data() {
    return {
      // MAX_ACTIVATE: 3,
      // activeSet: new Set(this.dataSource.actived)
      // activeSet: new Set(this.actived)
    };
  },
  created() {
    // console.log('this.dataSource: ', this.dataSource);
    // console.log('this.actived: ', this.actived);
  },
  methods: {
    _checkActive(index) {
      return this.activeSet.has(index);
    },
    // _upAcitveSet() {
    //   this.activeSet = new Set(this.actived);
    // },
    // updateActivedSet(index) {
      // const activeSet = this.activeSet;
      // const actived = activeSet.has(index);

      // // 已激活
      // if (actived) {
      //   activeSet.delete(index);
      // }
      // else {
      //   const size = activeSet.size;
      //   if (size < this.MAX_ACTIVATE) {
      //     activeSet.add(index);
      //   }
      // }

      // this.activeSet = new Set([...activeSet]);
      // this.$emit('tagsCallback', [...activeSet]);
    // }
  },
  components: {
    Tag
  }
};

export default Tags;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tags {
    overflow: auto;
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }

</style>