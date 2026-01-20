import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function TripToggle() {
  const [mode, setMode] = useState("from"); // or "round"

  return (
    <View className="flex-row p-1.5 border border-[#86a3d0] bg-['#86a3d0'] rounded-lg overflow-hidden mx-4">
      {/* One-way button */}
      <Pressable
        onPress={() => setMode("from")}
        className={`flex-1 p-3 items-center ${mode === "from" ? "bg-white rounded-lg" : ""}`}
      >
        <Text className={`text-md font-bold shadow-sm text-primary ${mode === "from" ? "text-primary" : ""}`}>
          From
        </Text>
      </Pressable>

      {/* Round-trip button */}
      <Pressable
        onPress={() => setMode("to")}
        className={`flex-1  p-3 items-center ${mode === "to" ? "bg-white rounded-lg" : ""}`}>
        <Text className={`text-md font-bold shadow-sm text-primary ${mode === "to" ? "text-primary" : ""}`}>
          To
        </Text>
      </Pressable>
    </View>
  );
}

