<template>
  <div class="home">
    <!-- 分类模块 -->
    <ul class="home-types">
      <router-link v-for="(item, index) in types" :key="index" tag="li" :to="'/list/' + item.id">
        <img :src="'/img/icon/' + item.img" alt="" />
        <p>{{ item.text }}</p>
      </router-link>
    </ul>
    <!-- 定义广告模块 -->
    <ul class="ad">
      <router-link v-for="(item, index) in ad" :key="index" :to="'/detail/' + item.id" tag="li">
        <h3 :class="'color-' + index">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <img :src="'/img/ad/' + item.url" alt="" />
      </router-link>
    </ul>
    <!-- 商品列表 -->
    <div class="home-list">
      <h2 class="guess-title">猜你喜欢</h2>
      <!-- 循环商品 -->
      <Product v-for="(item, index) in list" :key="index" :data="item"></Product>
    </div>
  </div>
</template>

<script>
// 引入组件
import Product from '../components/Product'
export default {
  // 注册组件
  components: { Product },
  data() {
    return {
      // 分类数据
      types: [
        { text: '美食', id: '1', img: '01.png' },
        { text: '电影', id: '2', img: '02.png' },
        { text: '酒店', id: '3', img: '03.png' },
        { text: '休闲', id: '4', img: '04.png' },
        { text: '外卖', id: '5', img: '05.png' },
        { text: 'KTV', id: '6', img: '06.png' },
        { text: '周边游', id: '7', img: '07.png' },
        { text: '丽人', id: '8', img: '08.png' },
        { text: '小吃', id: '9', img: '09.png' },
        { text: '火车票', id: '10', img: '10.png' }
      ],
      // 预定义出来
      ad: [],
      list: []
    }
  },
  // 组件创建完成请求数据
  created() {
    // 发送请求
    this.$http
      // get请求
      .get('/data/home.json')
      // 监听数据返回
      .then(({ data }) => {
        // 存储数据
        this.ad = data.ad
        this.list = data.list
        // console.log(this.ad)
      })
  }
}
</script>
<style lang="less" scoped>
@import '../assets/base.css';
.home-types {
  background: #fff;
  padding: 10px 0 5px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    width: (100%/5);
    float: left;
    text-align: center;
    img {
      width: 60%;
    }
    p {
      font-size: 12px;
      color: #666;
      padding: 8px 0 15px;
    }
  }
}
.ad {
  display: flex;
  background: #fff;
  margin-top: 10px;
  li {
    flex: 1;
    padding: 15px 0;
    text-align: center;
    border-right: 1px solid #ccc;
    &:last-child {
      border-right: none;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      color: #666;
      padding: 5px 0;
    }
    img {
      width: 60%;
    }
    .color-0 {
      color: red;
    }
    .color-1 {
      color: green;
    }
    .color-2 {
      color: purple;
    }
    /* 索引值
    $i: 0;
    枚举循环
    @each $item in red, green, purple {
      .color-#{$i} {
        color: $item;
      }
      // 更新索引值
      $i: $i + 1;
    } */
  }
}
.home-list {
  margin-top: 10px;
  background: #fff;
  .guess-title {
    padding: 10px 0;
    margin: 0 10px;
    font-size: 18px;
    font-weight: normal;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
}
</style>
