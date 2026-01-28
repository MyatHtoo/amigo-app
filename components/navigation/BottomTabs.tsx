import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Save from "../../app/screens/Save";
import CenterTabButton from "../ui/CenterTabButton";
import StepOne from "../../app/screens/StepOne";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Plan from "../../app/screens/Plan";
import GoogleAuth from "../../app/screens/Google";
import Home from "../../app/Home";
import Settings from "../../app/screens/Settings";

const Tab = createBottomTabNavigator();

function EmptyScreen() {
    return null;
}

export default function BottomTabs() {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2563EB",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarStyle: { height: 70 }
            }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="home-outline"
                            size={focused ? size + 2 : size}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontSize: focused ? 13 : 12,
                                fontWeight: focused ? "600" : "400",
                            }}>
                            Home
                        </Text>
                    ),
                    headerShown: true,
                    headerTitle: "Home",
                    headerStyle: {
                        backgroundColor: "#DBEAFE",
                        height: 80,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "#0D47A1"
                    },
                }} />

            <Tab.Screen
                name="MyPlan"
                component={Plan}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="book-outline"
                            size={focused ? size + 2 : size}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontSize: focused ? 13 : 12,
                                fontWeight: focused ? "600" : "400",
                            }}>
                            MyPlans
                        </Text>
                    ),
                    headerShown: true,
                    headerTitle: "Trips Note",
                    headerStyle: {
                        backgroundColor: "#DBEAFE",
                        height: 80,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "#0D47A1",
                    },
                }}
            />

            {/* CENTER + BUTTON */}
            <Tab.Screen
                name="AddItem"
                component={EmptyScreen}
                options={{
                    tabBarButton: (props) => <CenterTabButton {...props} />,
                }}
            />

            <Tab.Screen
                name="Save"
                component={Save}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="paper-plane"
                            size={focused ? size + 2 : size}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontSize: focused ? 13 : 12,
                                fontWeight: focused ? "600" : "400",
                            }}
                        >
                            Save
                        </Text>
                    ),
                    headerShown: true,
                    headerTitle: "Saved Trips",
                    headerStyle: {
                        backgroundColor: "#DBEAFE",
                        height: 80,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "#0D47A1"
                    },
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="settings"
                            size={focused ? size + 2 : size}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontSize: focused ? 13 : 12,
                                fontWeight: focused ? "600" : "400",
                            }}
                        >
                            Settings
                        </Text>
                    ),
                    headerShown: true,
                    headerTitle: "Settings",
                    headerStyle: {
                        backgroundColor: "#DBEAFE",
                        height: 80,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: "500",
                        color: "#0D47A1",
                    },
                }}
            />
        </Tab.Navigator>
    );
}
