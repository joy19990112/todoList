<!-- 
  待办事项列表，包含：
  1.双击编辑
  2.选中
 -->
<template>
  <div>
    <div v-for="(item, index) in todoList"
         :key="index">
      <todoItem :todoItem="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import todoItem from "./todoItem.vue";

export default {
  components: {
    todoItem
  },
  props: {},
  data() {
    return {}
  },

  created() { },
  mounted() { },
  methods: {},
  computed: {
    ...mapState(
      'todoInfo/todoInfo',
      ['todoList']
    ),
  },
}
</script>
<style
  scoped lang="scss"></style>
