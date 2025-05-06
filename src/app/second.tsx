import { View } from "react-native";
import { AppText } from "@/components/AppText";

export default function SecondScreen() {
  return (
    <View className="justify-center bg-lime-500 flex-1 p-4">
      <AppText center size="heading" bold>
        Second Screen
      </AppText>
    </View>
  );
}
