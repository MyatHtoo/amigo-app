import { View, Text, Pressable, Linking, TouchableOpacity } from "react-native";
import ImageCarousel from "./ImageCarousel";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { type } from './../constants/types';

type Props = {
  activity: any;
  youtubeLink?: string;
  setOpen?: (open: boolean) => void;
  editable?: boolean;
  day?: any;
  setEditPayload?: (payload: { title: string; data: any;type: "flight" | "accommodation" | "itinerary" } | null) => void;
};


export default function ActivityCard({ day, activity, youtubeLink, setOpen, editable, setEditPayload }: Props) {

  const modalContent = (day: number, time: string) => {
    setOpen && setOpen(true);
    setEditPayload && setEditPayload({
      type: "itinerary",
      title: "Edit Day " + day + " - " + time,
      data: "",
    })
  }
  return (
    <View className="flex-1 p-4 bg-white border border-gray-200 shadow-sm rounded-2xl">

      {/* Image Carousel */}
      <ImageCarousel images={activity.activity_photos} />

      {/* Title */}
      <Text className="text-base font-semibold text-primary">
        {activity.activity_name}
      </Text>

      {/* Description */}
      <Text className="mt-1 text-sm text-gray-600">
        {activity.description}
      </Text>

      {/* Footer */}
      <View className="flex-row items-center justify-between mt-3">
        <Text className="text-sm font-semibold text-primary">
          ฿ {activity.cost_thb}
        </Text>

        <View className="flex-row items-center gap-3">
          {editable &&
            <TouchableOpacity onPress={() => modalContent(day.day, activity.time)}>
              <MaterialIcons name="edit" size={26} color="blue" />
            </TouchableOpacity>
          }

          {youtubeLink && (
            <Pressable
              onPress={() => Linking.openURL(youtubeLink)}
              className="px-3 py-1.5 bg-red-600 rounded-full">
              <Text className="text-xs font-semibold text-white">
                ▶ Watch Vlog
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}
