import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean | null;
  toggleAuth: () => void;
}

export const useAuthStore = create<AuthState, [['zustand/persist', AuthState]]>(
  persist(
    (set) => ({
      isLoggedIn: false,
      toggleAuth: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    }),
    { name: 'auth-storage', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
