<template>
  <div>
    <!-- 复选框 -->
    <!-- 事项名称 -->
    {{ todoItem.planNm }}
    <!-- 时间 -->
    {{ todoItem.planDt }}
    <!-- 状态 -->
    {{ todoItem.planSta }}
    <!-- 编辑按钮 -->
    <!-- 删除按钮 -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    todoItem: {
      type: Object,
      default:
        () => { },
    },
  },
  data() {
    return {}
  },

  created() { },
  mounted() { },
  methods: {},
  computed: {},
}
</script>
<style
  scoped lang="scss"></style>
