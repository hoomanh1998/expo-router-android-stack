import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  return (
    <View className="justify-center bg-yellow-500 flex-1 p-4">
      <AppText center size="heading" bold>
        Index Screen
      </AppText>
      <Link href="/second" push asChild>
        <Button title="Go to /second screen" />
      </Link>
    </View>
  );
}
