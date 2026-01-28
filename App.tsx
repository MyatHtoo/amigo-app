import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import BottomTabs from "./components/navigation/BottomTabs";
import StepStack from "./components/navigation/StepStack";
import AuthStack from "./components/navigation/AuthStack";
import { useAuthStore } from "./components/store/auth.store";
import ToastManager from "toastify-react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const { isAuthenticated } = useAuthStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for auth state to be loaded from AsyncStorage
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null; // Or a splash screen component
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // Auth screens for non-authenticated users
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          // Main app screens for authenticated users
          <>
            <Stack.Screen name="MainTabs" component={BottomTabs} />
            <Stack.Screen name="Steps" component={StepStack} />
          </>
        )}
      </Stack.Navigator>

      <ToastManager />
    </NavigationContainer>
  );
}
