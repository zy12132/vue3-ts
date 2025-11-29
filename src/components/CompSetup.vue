<template>
  <div>
    <div>
      {{ counter }} - 双倍：{{ doubleCounter }}
    </div>
    <!-- 新增待办 -->
     <input 
     type="text" 
     v-model="todoName" 
     @keydown.enter="addTodo(newTodo(todoName))"
     />

    <h2 :style="{ color: titleInfo.color }">{{ titleInfo.value }}</h2>
    <!-- 待办事项列表 -->
     <div v-for="item in items" :key="item.id">
        {{ item.title }} - {{ item.completed ? '已完成' : '未完成' }}
     </div>
  </div>

</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref, computed, defineProps, onMounted } from 'vue';
import type { Todo } from '../types/Todo';
import type { TitleInfo } from '../types/TitleInfo';
import http from '../apis/request'


const counter = ref(1);
const doubleCounter = computed(() => counter.value * 2);

const items = ref<Todo[]>([]);
// items.value.push({
//       userId: 1,
//       id: 1,
//       title: '学习 Vue 3',
//       completed: false
//     }),
// items.value.push({
//       userId: 1,
//       id: 2,
//       title: '学习 TypeScript',
//       completed: true
//     });

const todoName = ref('');
const newTodo = (todoName: string): Todo =>{
      return {
        userId: Date.now(),
        id: Date.now(),
        title: todoName,
        completed: false
      };
    }
const addTodo = (todo: Todo): void =>{
      items.value.push(todo);
      todoName.value = '';
    };

defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
});  

onMounted(() => {
  http
     .get<Todo>('/todos/1')
     .then(res => {
        items.value.push(res.data);
     });
})
</script>

<style scoped>

</style>