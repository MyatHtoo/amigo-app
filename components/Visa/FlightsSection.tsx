import { View, Text } from "react-native";
import FlightCard from "./FlightCard";
import type { FlightGroup } from "../constants/types";

type Props = {
  flights: FlightGroup[];
  setOpen: (open: boolean) => void
};

export default function FlightsSection({ flights, setOpen }: Props) {
  const flightGroup = flights[0]; // one trip → one outbound + return

  return (
    <View>
      <Text className="mb-3 text-lg font-semibold">Flights</Text>

      <FlightCard
        // setOpen={setOpen}
        condition="details"
        label="Departure"
        flight={flightGroup.outbound_flight}
      />

      <FlightCard
        // setOpen={setOpen}
        condition="details"
        label="Return"
        flight={flightGroup.return_flight}
      />
    </View>
  );
}
