<!-- 
  待办事项底部，包含：
  1.全选
  2.已完成
  3.删除
 -->
<template>
  <div>
    <!-- 全选 -->
    <van-button @click="selectAll">全选</van-button>
    <!-- 已完成 -->
    <van-button @click="doneItem">已完成</van-button>
    <!-- 删除 -->
    <van-button @click="deleteItem">删除</van-button>
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
  methods: {
    // 全选
    selectAll() { },
    // 已完成
    doneItem() { },
    // 删除
    deleteItem() { }
  },
  computed: {},
}
</script>
<style scoped lang="scss"></style>