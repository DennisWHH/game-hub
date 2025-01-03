import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "../hooks/usePlatforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.slug,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.slug, selectedPlatform?.id]
  );

export default useGames;
