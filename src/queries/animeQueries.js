import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
    query getAnimeList($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(id: $id, search: $search) {
                id
                title {
                    romaji
                }
            }
        }
    }
`;

const GET_ANIME_CARD = gql`
    query getAnimeCard($id: Int) {
        Media(id: $id, type: ANIME) {
            id
            title {
                romaji
            }
            status
            coverImage {
                large
            }
            genres
            averageScore
        }
    }
`;

const GET_SEARCHED_ANIME = gql`
    query getSearchedAnime(
        $search: String
        $startDate_greater: FuzzyDateInt
        $startDate_lesser: FuzzyDateInt
        $endDate_greater: FuzzyDateInt
        $endDate_lesser: FuzzyDateInt
        $format_in: [MediaFormat]
        $episodes_greater: Int
        $episodes_lesser: Int
        $genre_in: [String]
    ) {
        Media(
            type: ANIME
            search: $search
            startDate_greater: $startDate_greater
            startDate_lesser: $startDate_lesser
            endDate_greater: $endDate_greater
            endDate_lesser: $endDate_lesser
            format_in: $format_in
            episodes_greater: $episodes_greater
            episodes_lesser: $episodes_lesser
            genre_in: $genre_in
        ) {
            id
            title {
                romaji
            }
            status
            coverImage {
                large
            }
            genres
            averageScore
        }
    }
`;

const GET_ANIME_PAGE = gql`
    query getAnimePage($id: Int) {
        Media(id: $id, type: ANIME) {
            title {
                romaji
                native
            }
            status
            description
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            seasonYear
            episodes
            duration
            source
            coverImage {
                large
            }
            bannerImage
            genres
            synonyms
            averageScore
            relations {
                edges {
                    id
                    node {
                        id
                        title {
                            romaji
                            native
                        }
                    }
                }
            }
        }
    }
`;

export { GET_ANIME_LIST, GET_SEARCHED_ANIME, GET_ANIME_CARD, GET_ANIME_PAGE };
