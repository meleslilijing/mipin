<template>
  <div class="Tags">
    <div v-for="tag in tags">
      <Tag :text="tag.text"></Tag>
    </div>
    <!-- {{tags}} -->
  </div>
</template>

<script>
import Tag from './Tag';
console.log
const Tags = {
  name: 'Tags',
	props: ['tags'],
  data() {
    return {
    };
  },
  computed: {

  },
  created() {
    console.log('mouted tags: ', this.tags)
  },
  methods: {
    // handleClick() {
    //   this.clicked = 'Tag-clicked'
    // }
  },
  components: {
    Tag
  }
};

console.log(Tags.props.tags)

export default Tags;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tags {
    overflow: auto;
    margin-top: 20px;
  }

</style>