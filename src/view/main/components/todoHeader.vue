<!-- 
  待办事项头部，包含：
  输入框：
  1.搜索功能
  2.增加功能
 -->
<template>
  <div>
    <!-- 搜索/输入框 -->
    <van-search v-model="searchValue" />
    <div>
      <!-- 添加按钮 -->
      <van-button @click="addTodoItem">添加</van-button>
      <!-- 搜索按钮 -->
      <van-button @click="searchTodo">搜索</van-button>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  components: {
    VanSearch: Search
  },
  props: {},
  data() {
    return {
      // 搜索内容
      searchValue: ''
    };
  },

  created() { },
  mounted() { },
  methods: {
    // 添加
    addTodoItem() { },
    // 搜索
    searchTodo() { }

  },
  computed: {},
}
</script>
<style scoped lang="scss"></style>