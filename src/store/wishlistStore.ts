import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  items: string[]; // Array of product IDs
  toggleItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (productId) => {
        set((state) => {
          const exists = state.items.includes(productId);
          if (exists) {
            return { items: state.items.filter((id) => id !== productId) };
          }
          return { items: [...state.items, productId] };
        });
      },
      hasItem: (productId) => get().items.includes(productId),
    }),
    {
      name: 'aura-wishlist-storage',
    }
  )
);
