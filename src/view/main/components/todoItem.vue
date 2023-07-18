<template>
  <div class="flex">
    <!-- 复选框 -->
    <van-checkbox v-model="todoItem.planChecked"
                  @change="changePlanChecked(todoItem)"
                  shape="square"></van-checkbox>
    <div>
      <!-- 事项名称 -->
      <span :class="todoItem.planSta ? 'line-through' : ''">{{ todoItem.planNm }}</span>
      <!-- 时间 -->
      {{ todoItem.planDt }}
    </div>
    <!-- 编辑按钮 -->
    <!-- 删除按钮 -->
  </div>
</template>

<script>
import { Checkbox } from 'vant';
export default {
  components: {
    VanCheckbox: Checkbox
  },
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
  methods: {
    // 改变复选框状态
    changePlanChecked(e) {
      console.log('eee', e);
    }
  },
  computed: {},
}
</script>
<style
  scoped lang="scss"></style>
