import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import ImageSlider from "../../components/ui/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Head() {
    const navigation = useNavigation();

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <ImageSlider />

            <View className="absolute top-12  flex flex-row justify-between w-full px-6">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={30} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    );
}