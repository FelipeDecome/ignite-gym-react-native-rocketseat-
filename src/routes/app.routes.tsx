import {
	type BottomTabNavigationProp,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import HistoryIcon from "@assets/history.svg";
import HomeIcon from "@assets/home.svg";
import ProfileIcon from "@assets/profile.svg";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

type AppRoutes = {
	home: undefined;
	exercise: undefined;
	history: undefined;
	profile: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const { tokens } = gluestackUIConfig;

export function AppRoutes() {
	const iconSize = tokens.space["6"];
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: tokens.colors.green500,
				tabBarInactiveTintColor: tokens.colors.gray200,
				tabBarStyle: {
					backgroundColor: tokens.colors.gray600,
					borderTopWidth: 0,
					height: Platform.OS === "android" ? "auto" : 96,
					paddingBottom: tokens.space["10"],
					paddingTop: tokens.space["6"],
				},
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<HomeIcon fill={color} width={iconSize} height={iconSize} />
					),
				}}
			/>
			<Screen
				name="history"
				component={History}
				options={{
					tabBarIcon: ({ color }) => (
						<HistoryIcon fill={color} width={iconSize} height={iconSize} />
					),
				}}
			/>
			<Screen
				name="profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<ProfileIcon fill={color} width={iconSize} height={iconSize} />
					),
				}}
			/>
			<Screen
				name="exercise"
				component={Exercise}
				options={{
					tabBarButton: () => null,
				}}
			/>
		</Navigator>
	);
}
