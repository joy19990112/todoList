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
  methods: {},
  computed: {},
}
</script>
<style scoped lang="scss"></style>