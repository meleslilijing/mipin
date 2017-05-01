<template>
  <div class="User">
    <div class="user-avatar user-avatar-big">
      <img v-show="!!avatarUrl" :src="avatarUrl" alt="用户头像">
      <i class="user-score">{{rateScore}}</i>
    </div>
    <div class="user-info">
      <p class="user-info-nickname">{{ nickName }}</p>
      <p class="user-info-msg">已收到<span>{{ rateCount }}</span>次评分</p>  
    </div>
  </div>
</template>

<script>
// 用户组件 用户Cards

const User = {
  name: 'User',
  props: ['nickName', 'rateCount', 'rateScore', 'avatarUrl'],
  data() {
    return {};
  },
  created() {
    console.log('avatarUrl: ', this.avatarUrl)
  }
};

export default User;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .User {
    position: relative;
    height: 86px; /*149*/
    background: white;
    /*border: 1px solid #eaeaea;*/
    border-left-width: 0;
    border-right-width: 0;
    line-height: 1;
  }

  /*头像*/
  .user-avatar {
    position: relative;
    float: left;
    margin: 20px 20px 0 20px;
    border-radius: 50%;
    border: 1px solid #eaeaea;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .user-avatar img {
    width: 100%;
  }

  .user-avatar-big {
    width: 48px;
    height: 48px;
    background-image: url('/static/img/user-avatar-def-big.png');
  }

  .user-avatar-small {
    width: 70px;
    height: 70px;
    background-image: url('/static/img/user-avatar-def-small.png');
  }

  .user-score {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 12px;
    line-height: 12px;
    padding: 0 5px;
    color: white;
    background-color: #fcbf2e;
    font-size: 12px;
    font-style: normal;
    border-radius: 9px;
    border: 1px solid #e9a432;
  }

  .user-info {
    float: left;
    margin-top: 26px;
  }

  .user-info .user-info-nickname {
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
  }

  .user-info .user-info-msg {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 11px;
  }
</style>