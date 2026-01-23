import { ScrollView, TouchableOpacity, View } from "react-native";
import VisaCard from "../../components/Visa/VisaCard";
import FlightsSection from "../../components/Visa/FlightsSection";
import AccommodationCard from "../../components/Visa/Accommodation";
import ItineraryTimeline from "../../components/Timeline/ItineraryTimeline";
import { data, itineraryData } from "../../components/constants/data";
import EditModal from "../../components/Modal/EditModal";
import { useState } from "react";
import { Text } from "react-native";

export default function TripEdit() {
    const [open, setOpen] = useState(false);
    console.log(open)
    const toggle = () => {
       setOpen(prev => !prev);
    }
    const title = "Edit Item";
    return (
        <View className="flex-1">
            <ItineraryTimeline
                setOpen={setOpen}
                itinerary={itineraryData.itinerary}
                header={
                    <View className="px-4 pt-2">
                        <TouchableOpacity onPress={toggle} className="self-start px-3 py-1 mb-4 bg-blue-100 rounded-full">
                            <Text>Open</Text>
                        </TouchableOpacity>
                        <VisaCard visa={data.visa_requirements} />

                        <View className="h-4" />

                        <FlightsSection flights={data.flights} setOpen={setOpen} />

                        <View className="h-4" />

                        <AccommodationCard accommodation={data.accommodation} setOpen={setOpen} />

                        <View className="h-6" />
                    </View>
                }
            />
            {open  && <EditModal flights={data.flights} setOpen={setOpen} open={open} title={title}/>}
        </View>

    )
}