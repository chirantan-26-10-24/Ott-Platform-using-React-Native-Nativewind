import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
	id,
	poster_path,
	title,
	vote_average,
	release_date,
}: Movie) => {
	const dateString = release_date;
	const parts = dateString.split("-");
	const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className="w-[30%]">
				<Image
					source={{
						uri: poster_path
							? `https://image.tmdb.org/t/p/w500/${poster_path}`
							: `https://placehold.co/600x400/1a1a1a/ffffff.png`,
					}}
					className="w-full h-52 rounded-lg"
					resizeMode="cover"
				/>
				<Text className="text-white text-sm font-bold mt-2 " numberOfLines={1}>{title}</Text>
				<View className="flex-row items-center justify-start gap-x-1">
					<Image source={icons.star} className="size-5" />
					<Text className="text-white text-sm font-bold">
						{Math.round(vote_average / 2)}/5
					</Text>
				</View>
				<View className="flex-row items-center justify-between mt-1">
					<Text className="text-light-300 text-xs font-medium">
						{formattedDate}
					</Text>
                    <Text className="text-xs font-medium text-light-300 uppercase">movie</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default MovieCard;
