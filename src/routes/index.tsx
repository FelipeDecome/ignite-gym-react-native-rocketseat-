import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { Box } from "@gluestack-ui/themed";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { AuthRoutes } from "./auth.routes";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: gluestackUIConfig.tokens.colors.gray700,
	},
};

export function Routes() {
	return (
		<Box bg="$gray700" flex={1}>
			<NavigationContainer theme={theme}>
				<AuthRoutes />
			</NavigationContainer>
		</Box>
	);
}
