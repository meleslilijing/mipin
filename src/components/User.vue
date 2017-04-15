<template>
  <div class="User">
    <div class="user-avatar user-avatar-big"></div>
    <div class="user-info"></div>
    <p>{{ nickName }}</p>
    <p>已收到<span>{{ times }}</span>次评分</p>
    
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
    };
  },
  
};

export default User;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .User {
    height: 85px;
    margin-top: 30px;
    background: white;
  }

  .user-avatar {
    float: left;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
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

  .user-info {
    position: relative;
    padding-left: 100px;
    background-color: teal;
  }
</style>