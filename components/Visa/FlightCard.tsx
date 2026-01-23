import { View, Text, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from '@expo/vector-icons/Feather';
import type { SingleFlight } from "../constants/types";
import clsx from "clsx";

type Props = {
  flight: SingleFlight;
  label: "Departure" | "Return";
  condition?: "details" | "update";
};

export default function FlightCard({ flight, label,condition }: Props) {
  return (
    <View className={clsx("p-4 mb-3  shadow-sm rounded-2xl",
      condition === "details" && "bg-white" ,
      condition === "update" && "bg-blue-100" 
     )}>

      {/* HEADER */}
      <View className="flex flex-row justify-between">
        <View className="flex-row items-center gap-2 mb-2">
          <MaterialIcons
            name={label === "Departure" ? "flight-takeoff" : "flight-land"}
            size={20}
            color="#2563eb"
          />
          <Text className="text-sm font-semibold text-primary">
            {label} Flight
          </Text>
        </View>
        <View className="flex-row items-center gap-2 mb-2">
          <Text className="px-3 py-1 bg-blue-100 rounded-lg text-semibold text-primary text-md">
            {new Date(flight.departure_time).toLocaleDateString([], {
              month: "short",
              day: "numeric"
            })}
          </Text>
          <MaterialIcons name="edit" size={26} color="blue" />
        </View>
      </View>

      {/* ROUTE */}

      <Text className="text-lg font-semibold">
        {flight.departure_airport} → {flight.arrival_airport}
      </Text>


      {/* AIRLINE */}
      <View className="flex-row items-center gap-2 mt-1">
        <Image
          source={{ uri: flight.airline_logo }}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-gray-600">
          {flight.airline} • {flight.flight_number}
        </Text>
      </View>

      {/* TIMES & PRICE */}
      <View className="flex-row justify-between mt-4">
        <View>
          <Text className="text-xs text-gray-500">Departure</Text>
          <Text className="font-semibold">
            {new Date(flight.departure_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>

        <View>
          <Text className="text-xs text-gray-500">Arrival</Text>
          <Text className="font-semibold">
            {new Date(flight.arrival_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>

        <View>
          <Text className="text-xs text-gray-500">Price</Text>
          <Text className="font-semibold text-primary">
            {flight.cost_thb} THB
          </Text>
        </View>
      </View>
    </View>
  );
}
