import { create } from 'zustand';
import { CartItem, CartStore, Product } from '../types';

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    });
  },

  removeItem: (productId: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId: number, quantity: number) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  clearCart: () => set({ items: [] }),

  get total() {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));