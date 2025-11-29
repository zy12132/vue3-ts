<script setup lang="ts">
import Comp from '@/components/Comp.vue';
import CompSetup from '@/components/CompSetup.vue';
</script>

<template>
  <Comp :titleInfo="{ value: '待办事项', color: 'red' }"/>
  <hr>
  <CompSetup :titleInfo="{ value: '待办事项', color: 'green' }"/>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>