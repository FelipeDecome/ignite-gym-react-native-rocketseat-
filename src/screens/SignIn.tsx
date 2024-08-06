import { Image, VStack } from "@gluestack-ui/themed";

import backgroundImageSrc from "@assets/background.png";

export function SignIn() {
	// const { signIn } = useAuth();
	// const { navigate } = useNavigation();

	// const handleSignIn = async () => {
	//   try {
	//     await signIn();
	//     navigate('Home');
	//   } catch (error) {
	//     console.error(error);
	//   }
	// };

	return (
		<VStack bg="$gray700" flex={1}>
			<Image
				alt="Pessoas treinando"
				defaultSource={{
					uri: backgroundImageSrc,
				}}
				h={624}
				position="absolute"
				source={backgroundImageSrc}
				w="$full"
			/>
		</VStack>
	);
}
