import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts,
} from "@expo-google-fonts/roboto";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { StatusBar, View } from "react-native";

import { config } from "./config/gluestack-ui.config";

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return (
		<GluestackUIProvider config={config}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

			{fontsLoaded ? (
				<Center flex={1} bg="$info600">
					<Text>Home</Text>
				</Center>
			) : (
				<View />
			)}
		</GluestackUIProvider>
	);
}
