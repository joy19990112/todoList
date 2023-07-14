<template>
  <div>
    <!-- 头部 -->
    <todoHeader />
    <!-- 待办事项列表 -->
    <todoList />
    <!-- 底部 -->
    <todoFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import todoHeader from './components/todoHeader.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'
export default {
  components: {
    todoHeader,
    todoList,
    todoFooter,
  },
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
  },
}
</script>
<style
  scoped></style>
