// src/stores/modules/cartStore.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  // === STATE ===
  const items = ref<CartItem[]>([]);

  // === GETTER ===
  const totalItems = computed(() => items.value.length);
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  // === ACTION ===
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    const existingItem = items.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  return { items, totalItems, totalPrice, addItem, clearCart };
});