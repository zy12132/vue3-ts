<template>
  <div>
    <h1>{{ name }}</h1>
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

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import type { Todo } from '../types/Todo';
import type { TitleInfo } from '../types/TitleInfo';

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true
    }
  },

  data() {
    return {
      name: '张三',
      counter: 1,
      items: [] as Todo[],
      todoName: ''
    };
  },
  created() {
    this.items.push({
      userId: 1,
      id: 1,
      title: '学习 Vue 3',
      completed: false
    }),
     this.items.push({
      userId: 1,
      id: 2,
      title: '学习 TypeScript',
      completed: true
    });
  },
  computed: {
    doubleCounter(): number{
      return this.counter * 2;
    }
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        userId: Date.now(),
        id: Date.now(),
        title: todoName,
        completed: false
      };
    },
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = '';
    }
  }
});
</script>

<style scoped>

</style>