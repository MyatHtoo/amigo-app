import { FlatList, View } from "react-native";
import DaySection from "./DaySection";

type Props = {
  itinerary: any[];
  header?: React.ReactNode;
  setOpen: (open: boolean) => void
};

export default function ItineraryTimeline({ itinerary, header, setOpen }: Props) {
  console.log('h',setOpen)
  return (
    <FlatList
      data={itinerary}
      keyExtractor={(item) => item.day.toString()}
      renderItem={({ item }) => <DaySection day={item} setOpen={setOpen} />}
      ListHeaderComponent={header}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
    />
  );
}
