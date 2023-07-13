<template>
  <div class="card-main">
    <div class="shortcuts">
      <div
        @click="goTo(item.url,item.beforeCallBack)"
        class="item"
        v-for="(item, index) in cardsList"
        :key="index"
      >
      <!-- icon -->
        <van-image
          class="icon"
          :fade="false"
          :width="width"
          :height="height"
          :src="item.icon"
        ></van-image>
        <!-- 标题 -->
        <span class="text">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['width', 'height', 'cardsList'],
  data() {
    return {

    }
  },
  methods: {
    goTo(url = '空页面地址', beforeCallBack = false) {
      if (beforeCallBack) {
        this.$emit('beforeCallBack', url);
      } else {
        // 跳转页面
      }

    },
  },
}
</script>
<style lang="scss" scoped>
.card-main {
  .shortcuts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      text-align: center;
      width: 25%;
      margin-bottom: 36rpx;

      &:last-child:nth-child(4n - 1) {
        margin-right: calc(24% + 4% / 3);
      }

      &:last-child:nth-child(4n - 2) {
        margin-right: calc(48% + 8% / 3);
      }

      .icon {
        display: flex;
        justify-content: center;
      }

      .text {
        font-size: 24rpx;
        font-weight: normal;
        color: #333333;
        line-height: 32rpx;
        display: inline-block;
        margin-top: 12rpx;
      }
    }
  }
}
</style>