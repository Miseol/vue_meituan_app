<template>
  <div class="detail">
    <!-- 图片信息 -->
    <div class="img-part">
      <img :src="'/img/item/' + data.src" alt="" />
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
    </div>
    <!-- 价格模块 -->
    <div class="prict-part">
      <span class="price"
        ><em>{{ data.price }}</em
        >元</span
      >
      <span class="origin-price">门市价{{ data.originPrice }}元</span>
      <span class="buy-btn">立即购买</span>
    </div>
    <!-- 销量模块 -->
    <ul class="sales-part">
      <li>支持立即退货</li>
      <li>支持随时退货</li>
      <li>销量{{ data.sales }}</li>
    </ul>
    <!-- 商店信息 -->
    <div class="store-part module">
      <div class="module-header">店家信息</div>
      <div class="module-body">
        <p>{{ data.storeName }}</p>
        <p>{{ data.storeAddress }}</p>
      </div>
      <div class="module-footer">查看{{ data.storeNum }}家分店</div>
    </div>
    <!-- 购买须知 -->
    <div class="buy-part module">
      <div class="module-header">购买须知</div>
      <div class="module-body">
        <h3>有效日期</h3>
        <p>{{ data.validateTime }}</p>
        <h3>使用日期</h3>
        <p>{{ data.useTime }}</p>
        <h3>使用规则</h3>
        <p v-for="(item, index) in data.rules" :key="index">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 绑定数据
  data() {
    return {
      // 避免数据丢失
      data: {}
    }
  },
  // 定义方法
  methods: {
    // 请求数据
    updateData() {
      // 获取路由参数
      let { params } = this.$route
      // 请求数据
      this.$http
        // get请求
        .get('/data/product.json', { params })
        // 监听数据返回
        .then(({ data }) => (this.data = data))
    }
  },
  // 创建完成请求数据
  created() {
    // 更新数据
    this.updateData()
  },
  // 局部监听
  // beforeRouteEnter(route, oldRoute, next) {
  // 	console.log(arguments)
  // 	// 必须执行next方法
  // 	next();
  // },
  // 监听路由的变化
  watch: {
    // 路由数据的变化
    $route() {
      // console.log(111, arguments)
      // 更新数据
      this.updateData()
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/base.css';
.img-part {
  position: relative;
  img {
    width: 100%;
    display: block;
  }
  h1,
  p {
    position: absolute;
    left: 20px;
    bottom: 15px;
    color: #fff;
  }
  h1 {
    bottom: 40px;
    font-size: 26px;
  }
}
.prict-part {
  background: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px;
  color: #666;
  .price {
    color: #06c1ae;
    margin-right: 5px;
    em {
      font-size: 26px;
      font-style: normal;
    }
  }
  .buy-btn {
    color: #fff;
    background: #f60;
    padding: 5px 12px;
    float: right;
    margin-top: 5px;
    font-size: 12px;
  }
}
.sales-part {
  background: #fff;
  padding: 10px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    float: left;
    width: 50%;
    line-height: 30px;
    color: yellowgreen;
    &:last-child {
      color: #333;
    }
  }
}
.module {
  margin-top: 10px;
  background: #fff;
  padding: 10px;
  .module-header {
    font-size: 22px;
    color: #333;
    padding: 8px 0 10px;
    border-bottom: 1px solid #ccc;
  }
  .module-body {
    padding: 10px 0;
    line-height: 28px;
    h3 {
      color: #f60;
      padding: 15px 0 10px;
    }
  }
  .module-footer {
    color: skyblue;
    border-top: 1px solid #ccc;
    padding: 10px 0 4px;
  }
}
</style>
