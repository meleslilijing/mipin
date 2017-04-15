<template>
  <div class="User">
    <div class="user-avatar user-avatar-big">
      <i class="user-score">{{score}}</i>
    </div>
    <div class="user-info">
      <p class="user-info-nickname">{{ nickName }}</p>
      <p class="user-info-msg">已收到<span>{{ times }}</span>次评分</p>  
    </div>
  </div>
</template>

<script>
// 用户组件 用户Cards

const User = {
  name: 'User',
  data() {
    return {
      nickName: '陈敏娜',
      times: 121,				// 次数
      score: 4.2
    };
  },
  
};

export default User;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .User {
    position: relative;
    height: 85px;
    background: white;
    margin-top: 17px;
    border: 1px solid #ccc;
    border-left-width: 0;
    border-right-width: 0;
    line-height: 1;
  }

  /*头像*/
  .user-avatar {
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    /*background-color: teal;*/
  }

  .user-avatar-big {
    width: 50px;
    height: 50px;
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
    padding: .2em;
    color: white;
    background-color: brown;
    font-size: 12px;
    font-style: normal;
    border-radius: 6px;
  }

  .user-info {
    position: absolute;
    left: 90px;
    top: 20px;
  }

  .user-info .user-info-nickname {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
  }

  .user-info .user-info-msg {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
    margin-top: 9px;
  }
</style>