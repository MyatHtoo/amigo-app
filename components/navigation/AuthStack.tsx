import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../../app/screens/GetStarted";
import Login from "../../app/screens/Login";
import Register from "../../app/screens/Register";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
      initialRouteName="GetStarted" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={Register} />
    </Stack.Navigator>
  );
}
