<template>
  <div id="app">
    <div class="header">
      <a class="go-back" @click="goBack">
        <i class="arrow iconfont">&#xe658;</i>
      </a>
      <h1>仿美团移动端网站</h1>
      <a class="login iconfont">&#xe603;</a>
    </div>
    <div class="search" v-show="$route.fullPath.indexOf('/detail/') !== 0">
      <input
        type="text"
        v-model="msg"
        @keyup.enter="showSearchResult"
        placeholder="请输入搜索关键字"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    showSearchResult() {
      this.$store.commit('updateSearch', this.msg)
      // 清空数据
      this.msg = ''
    }
  }
}
</script>

<style lang="less">
@import './assets/base.css';
.header {
  display: flex;
  .go-back,
  .login {
    width: 60px;
  }
  .login {
    font-size: 26px;
    font-weight: 600;
  }
  .go-back {
    position: relative;
    .arrow {
      font-size: 34px;
      font-weight: 500;
      color: #fff;
      position: absolute;
      top: 1px;
      left: 20px;
    }
  }
  h1 {
    flex: 1;
    font-size: 24px;
  }
}
.search {
  background: #fff;
  padding: 10px 20px;
  display: flex;
  input {
    font-size: 14px;
    background: #efefef;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 18px;
    flex: 1;
  }
}
</style>
