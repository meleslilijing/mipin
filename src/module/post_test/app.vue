<template>
  <div id="Introduction" class="page">
    
  </div>
</template>

<script>
// 产品介绍页
const doc = document;

const Introduction = {
  name: 'Introduction',
  data() {
    return {
      bannerList: [
        {banner: 'image_jieshao_1.png', controller: 'jindu_page_1.png'},
        {banner: 'image_jieshao_2.png', controller: 'jindu_page_2.png'},
        {banner: 'image_jieshao_3.png', controller: 'jindu_page_3.png'},
        {banner: 'image_jieshao_4.png', controller: 'jindu_page_4.png'},
      ],
      activeIndex: 1,
      pageWidth: 414
    };
  },
  computed: {
    bannerSrc() {
      return this.bannerList.map((obj) => {
        const { banner, controller } = obj;
        const staticPath = '/static/img/'

        return {
          banner: staticPath + banner,
          controller: staticPath + controller
        }
      })
    },
    length() {
      return this.bannerList.length;
    }
  },
  methods: {
    onSwipeRight() {
      const length = this.length;
      let page = this.activeIndex;

      if(page < length) {
        page = ++this.activeIndex;
      }

      this.updateBanner(page);
    },
    onSwipeLeft() {
      const length = this.length;
      let page = this.activeIndex;

      if(page > 1) {
        page = --this.activeIndex;
      }

      this.updateBanner(page);
    },
    updateBanner(page) {
      const width = this.pageWidth * (page - 1);

      const bannerUl = doc.querySelector('.banner-viewport ul');
      bannerUl.style.left = -width + 'px';

      console.log('page: %s,pull width: %s', page, width);
    }
  },
  beforeMount() {
    // const height = window.innerHeight;
    // const body = doc.body || doc.getElementsByTagName('body')[0];
    // body.style.height = height + 'px';
  },
  mounted() {
    // set banner-viewport width
    // and
    // add animation in this DOM
    const length = this.length;
    const bannerUl = doc.querySelector('.banner-viewport ul');
    bannerUl.style.width = length * this.pageWidth + 'px';

    // set banner-item page width
    const bannerItem = doc.querySelectorAll('.banner-item');
    bannerItem.forEach((dom) => {
      const width = this.pageWidth;
      dom.style.width = width + 'px';
    })
  }
};

export default Introduction;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/style/reset.css';

  #Introduction {
    position: relative;    
    height: 100%;
    width: 100%;
    background: white;
  }

  .banner-wrapper {
    height: 100%;
  }

  .banner-viewport {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .banner-viewport > ul {
    position: relative;
    height: 100%;
    transition:left 0.5s;
    left: 0;
  }

  .banner-viewport li {
    float: left;
    position: relative;
    height: 100%;
  }

  .banner-viewport img {
    width: 100%;
  }

  .banner-item {
    margin: 0 auto;
  }

  #Introduction .title {
    margin-top: 18px;
    font-size: 22px;
    text-align: center;
  }

  #Introduction .sub-title {
    margin-top: 17px;
    font-size: 14px;
    color: #959595;
    text-align: center;
  }

  .download {
    display: block;
    height: 51px;
    line-height: 51px;
    margin: 46px 60px 0;
    text-align: center;
    background-color: #f1cf0e;
    -webkit-border-radius: 77px;
    border-radius: 77px;
    -moz-border-radius: 77px;
    -ms-border-radius: 77px;
    -o-border-radius: 77px;
  }

  .download span {
    font-size: 16px;
  }

  .banner-viewport .controller {
    margin: 32px auto 0 auto;
    width: 33%;
  }

</style>