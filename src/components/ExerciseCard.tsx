import {
	HStack,
	Heading,
	Icon,
	Image,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

type Exercise = {
	name: string;
	sets: number;
	reps: number;
};

type Props = TouchableOpacityProps & {
	exercise: Exercise;
};

export function ExerciseCard({ exercise, ...rest }: Props) {
	return (
		<TouchableOpacity {...rest}>
			<HStack alignItems="center" bg="$gray500" p="$2" pr="$4" rounded="$md">
				<Image
					alt="Imagem do exercício"
					h="$16"
					rounded="$md"
					mr="$4"
					source={{
						uri: "https://treinomestre.com.br/wp-content/uploads/2017/11/fazer-o-treino-de-trapezio-separado--768x512.jpg.webp",
					}}
					resizeMode="cover"
					w="$16"
				/>

				<VStack flex={1} gap="$1">
					<Heading color="$white" fontSize="$lg" fontFamily="$heading">
						{exercise.name}
					</Heading>

					<Text
						color="$gray200"
						fontSize="$sm"
						fontFamily="$body"
						numberOfLines={2}
					>
						{exercise.sets} séries x {exercise.reps} repetições
					</Text>
				</VStack>

				<Icon as={ChevronRight} color="$gray300" />
			</HStack>
		</TouchableOpacity>
	);
}
