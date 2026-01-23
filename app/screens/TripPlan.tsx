import { SafeAreaView } from "react-native-safe-area-context";
import ItineraryTimeline from "../../components/Timeline/ItineraryTimeline";
import { useRef, useState } from "react";
import type { TripSummaryItem } from "../../components/constants/types";
import { Pressable, Text, View, Animated, ScrollView } from "react-native";
import TripSummaryEdit from "../../components/TripPlanScreen/TripSummaryEdit";
import TripSummaryView from "../../components/TripPlanScreen/TripSummaryView";
import CollapsibleTripHeader from "../../components/TripPlanScreen/CollapsibleTripHeader";
import VisaCard from "../../components/Visa/VisaCard";
import FlightsSection from "../../components/Visa/FlightsSection";
import AccommodationCard from "../../components/Visa/Accommodation";
import Button from "../../components/ui/Button";
import { useNavigation } from "expo-router";
import { data, itineraryData } from "../../components/constants/data";

export default function TripPlan() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const [editMode, setEditMode] = useState(false);
    const navigation = useNavigation();

    const [tripSummary, setTripSummary] = useState<TripSummaryItem[]>([
        { key: "destination", label: "Destination", value: "China" },
        { key: "from", label: "From", value: "19 Sep" },
        { key: "to", label: "To", value: "25 Sep" },
        { key: "travelType", label: "Travel Type", value: "Solo" },
        { key: "people", label: "People", value: "1" },
        { key: "budget", label: "Budget", value: "20000 THB" },
        { key: "nationality", label: "Nationality", value: "Thai" },
        { key: "plan", label: "Travel Plan", value: "International" },
    ]);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* <View className="flex-row items-center justify-between px-4 pt-4">
                <Text className="text-xl font-bold">Trip Plan</Text>
                
            </View> */}

            {/* Summary */}
            {editMode ? (
                <TripSummaryEdit
                    editMode={editMode}
                    setEditMode={setEditMode}
                    data={tripSummary}
                    onChange={setTripSummary}
                />
            ) : (
                <CollapsibleTripHeader scrollY={scrollY} setEditMode={setEditMode} editMode={editMode} />

            )}
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: 50 }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}>
                <View className="px-4 mt-2">
                    <VisaCard visa={data.visa_requirements} />

                    <View className="h-4" />

                    <FlightsSection flights={data.flights} />

                    <View className="h-4" />

                    <AccommodationCard accommodation={data.accommodation} />
                </View>
                <ItineraryTimeline itinerary={itineraryData.itinerary} />

                <View className="flex-row justify-center gap-4 pl-8 pr-8 mb-5 ">
                    <Button title="Cancel" variant="primary" size="md" />
                    <Button onPress={() => navigation.navigate("MainTabs", {
                        screen: "Save",
                    })} title="Save" variant="primary" size="md" />
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}
