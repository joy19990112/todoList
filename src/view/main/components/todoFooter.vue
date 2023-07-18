<!-- 
  待办事项底部，包含：
  1.全选
  2.已做
  3.删除
 -->
<template>
  <div>
    <!-- 全选 -->
    <van-button type="primary">全选</van-button>
    <!-- 已做 -->
    <van-button>已做</van-button>
    <!-- 删除 -->
    <van-button>删除</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  components: {
    VanButton: Button

  },
  props: {},
  data() {
    return {
    };
  },

  created() { },
  mounted() { },
  methods: {},
  computed: {},
}
</script>
<style scoped lang="scss"></style>