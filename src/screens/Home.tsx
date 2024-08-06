import { VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/Home/Header";

export function Home() {
	return (
		<VStack flex={1}>
			<HomeHeader />
		</VStack>
	);
}
