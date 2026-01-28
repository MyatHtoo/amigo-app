import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuthStore } from "../../components/store/auth.store";
import { validateRegisterForm } from "../../components/constants/validation";

export default function Register() {
  const navigation = useNavigation();
  const { register, loading, error, clearError } = useAuthStore();
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleCreateAccount = async () => {
    // Clear previous errors
    setErrors({ username: "", email: "", password: "" });
    clearError();

    // Validate form
    const validation = validateRegisterForm(username, email, password);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Attempt registration
    try {
      await register(username, email, password);
      // Authentication state will automatically navigate to Home
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
    console.log("Google sign in");
  };

  const handleNavigateToLogin = () => {
    navigation.navigate("Login" as never);
  };
  return (
    <SafeAreaView className="flex-1 mt-10">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 px-6 pt-12">
          {/* Header */}
          <View className="mb-10">
            <Text className="text-4xl font-bold text-center text-primary">
              Create Account
            </Text>
            <Text className="text-base text-center mt-2 text-blue-400">
              Let's start with creating an account!
            </Text>
          </View>

          {/* Form */}
          <View className="gap-5">
            {/* Error Message */}
            {error && (
              <View className="p-3 bg-red-50 rounded-lg border border-red-200">
                <Text className="text-red-600 text-sm">{error}</Text>
              </View>
            )}

            {/* Username Field */}
            <View>
              <Text className="text-sm font-medium mb-2 text-primary">
                Username
              </Text>
              <Input
                placeholder="Enter your username"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  if (errors.username) {
                    setErrors({ ...errors, username: "" });
                  }
                }}
                variant="secondary"
                size="lg"
                error={errors.username}
              />
              {errors.username ? (
                <Text className="text-red-500 text-xs mt-1">
                  {errors.username}
                </Text>
              ) : null}
            </View>

            {/* Email Field */}
            <View>
              <Text className="text-sm font-medium mb-2 text-primary">
                Email
              </Text>
              <Input
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email) {
                    setErrors({ ...errors, email: "" });
                  }
                }}
                variant="secondary"
                size="lg"
                error={errors.email}
              />
              {errors.email ? (
                <Text className="text-red-500 text-xs mt-1">
                  {errors.email}
                </Text>
              ) : null}
            </View>

            {/* Password Field */}
            <View>
              <Text className="text-sm font-medium mb-2 text-primary">
                Password
              </Text>
              <View className="relative">
                <Input
                  placeholder="At least 8 characters"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (errors.password) {
                      setErrors({ ...errors, password: "" });
                    }
                  }}
                  secureTextEntry={!showPassword}
                  variant="secondary"
                  size="lg"
                  error={errors.password}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text className="text-red-500 text-xs mt-1">
                  {errors.password}
                </Text>
              ) : null}
            </View>

            {/* Create Button */}
            <View className="mt-4">
              <Button
                title={loading ? "Creating account..." : "Create"}
                onPress={handleCreateAccount}
                variant="primary"
                size="lg"
                checked={!loading}
              />
            </View>

            {/* Divider */}
            <View className="flex-row items-center my-2">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">Or</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Google Sign In Button */}
            <TouchableOpacity
              onPress={handleGoogleSignIn}
              disabled={loading}
              className="h-14 border border-gray-300 rounded-xl flex-row items-center justify-center gap-3 bg-white"
            >
              <Ionicons name="logo-google" size={24} color="#DB4437" />
              <Text className="text-base font-medium text-primary">
                {loading ? "Signing in..." : "Continue with Google"}
              </Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View className="flex-row items-center justify-center mt-4 mb-6">
              <Text className="text-base text-blue-400">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={handleNavigateToLogin}>
                <Text className="text-base font-semibold text-primary">
                   Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}