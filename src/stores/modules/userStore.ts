import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    // State
    const title = ref('')

    // Getter
    const userName = computed(() => title.value || '游客');

    // Action
    const setTitle = (newTitle: string | null | undefined) => {
      title.value = newTitle ?? ''; // 在 Action 中处理逻辑
    }
    return { title, userName, setTitle };
  },
  {
    persist: true, // 开启持久化
  }
);