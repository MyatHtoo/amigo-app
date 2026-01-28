import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  email: string;
  username: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  
  // Actions
  login: (usernameOrEmail: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setUser: (user: User) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (usernameOrEmail: string, password: string) => {
        set({ loading: true, error: null });
        
        try {
          // Simulate API call - Replace with your actual API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          // Mock successful login
          const mockUser: User = {
            id: "1",
            email: usernameOrEmail.includes("@") ? usernameOrEmail : `${usernameOrEmail}@example.com`,
            username: usernameOrEmail.includes("@") ? usernameOrEmail.split("@")[0] : usernameOrEmail,
          };

          set({ 
            user: mockUser, 
            isAuthenticated: true, 
            loading: false,
            error: null 
          });
        } catch (error: any) {
          set({ 
            error: error.message || "Login failed. Please try again.",
            loading: false 
          });
        }
      },

      register: async (username: string, email: string, password: string) => {
        set({ loading: true, error: null });
        
        try {
          // Simulate API call - Replace with your actual API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          // Mock successful registration
          const mockUser: User = {
            id: Date.now().toString(),
            email: email,
            username: username,
          };

          set({ 
            user: mockUser, 
            isAuthenticated: true, 
            loading: false,
            error: null 
          });
        } catch (error: any) {
          set({ 
            error: error.message || "Registration failed. Please try again.",
            loading: false 
          });
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false,
          error: null 
        });
      },

      clearError: () => set({ error: null }),

      setUser: (user: User) => set({ user, isAuthenticated: true }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
