import Modal from "react-native-modal";
import { View, TextInput, Pressable, Text } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import FlightCard from "../Visa/FlightCard";
import type { FlightGroup } from "../constants/types";
import { useState } from "react";
import Button from "../ui/Button";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  flights: FlightGroup[];
  // onClose: () => void;
};



export default function EditModal({
  open, setOpen, title, flights }: Props
) {

  const flightGroups = flights[0];
  const [send, setSend] = useState(false);
  return (
    <Modal
      isVisible={open}
      avoidKeyboard
      backdropOpacity={0.4}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => setOpen(false)}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View style={{ width: send ? 340 : 340, height: send ? 420 : 200, borderRadius: 20 }} className="px-4 pt-4 pb-6 bg-white rounded-t-3xl">
        {/* Drag indicator */}
        <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-4" />
        
        <View className="flex-row items-center justify-between ">
          <View className="flex flex-row items-center gap-2 mb-4">
            <MaterialIcons name="flight-takeoff" size={30} color="blue" />
            <Text className="text-xl font-semibold text-primary">{title}</Text>
          </View>

          <View className="px-5 mb-5 rounded-full" onTouchStart={() => setOpen(false)}>
            <FontAwesome name="close" size={24} color="blue" />
          </View>
        </View>
        {/* Input row */}
        <View className="flex-row items-end gap-3">
          <TextInput
            multiline
            numberOfLines={14}
            textAlignVertical="top"
            placeholder="I enjoy Asian cultural experiences, traditional local food, and scenic nature..."
            placeholderTextColor="#999"
            // value={specialRequirements}
            // onChangeText={setSpecialRequirements}
            className="flex-1 border border-gray-300 rounded-xl p-4 min-h-[140px] text-base"
          />

          {/* Send button */}
          <Pressable
            onPress={() => setSend(true)}
            className="items-center justify-center w-12 h-12 mb-1 bg-blue-600 rounded-full"
          >
            <MaterialIcons name="send" size={30} color="black" />
          </Pressable>
        </View>

        {send &&
          <View className="mt-4">
            <FlightCard
              // setOpen={setOpen}
              condition="update"
              label="Departure"
              flight={flightGroups.outbound_flight}
            />
            <Button title="Update" onPress={() => setOpen(false)} />
          </View>}


      </View>
    </Modal>
  );
}
