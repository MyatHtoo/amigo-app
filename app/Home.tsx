
import { View } from "react-native";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import StepIndicator from 'react-native-step-indicator';


const PRIMARY_BLUE = "#0D47A1";

const customStyles = {
  // circle border
  stepStrokeCurrentColor: PRIMARY_BLUE,
  stepStrokeFinishedColor: PRIMARY_BLUE,
  stepStrokeUnFinishedColor: PRIMARY_BLUE,

  // circle fill
  stepIndicatorCurrentColor: "#FFFFFF",
  stepIndicatorFinishedColor: PRIMARY_BLUE,
  stepIndicatorUnFinishedColor: "#647EA6",

  // number color
  stepIndicatorLabelCurrentColor: PRIMARY_BLUE,
  stepIndicatorLabelFinishedColor: "#FFFFFF",
  stepIndicatorLabelUnFinishedColor: "#EAEAEA",

  // line between steps
  separatorFinishedColor: PRIMARY_BLUE,
  separatorUnFinishedColor: PRIMARY_BLUE,

  currentStepLabelColor: PRIMARY_BLUE,

  // sizes (adjust if needed)
  stepIndicatorSize: 36,
  currentStepIndicatorSize: 42,
};


export default function Home() {
  return (
    <View className="justify-center flex-1 gap-4 px-6 bg-white">
      <Input placeholder="Email" icon="mail" />
      <Input placeholder="Password" size="lg" secureTextEntry  icon="key" iconColor="#0D47A1" iconSize={26}/>
      <Button title="Next" variant = "primary" size="md" icon="key" iconColor="#ffffff"/>
      <Button title="Friends" variant = "secondary" size="sm" iconSize={22} icon="person-outline" iconColor="#0D47A1"/>
      <Button title="Solo" variant = "primary" size="lg" iconSize={22} icon="person" iconColor="#ffffff"/>

<StepIndicator
  currentPosition={3}
  customStyles={customStyles}
/>

    </View>
  );
}
