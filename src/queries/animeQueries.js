import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
    query getAnimeList(
        $id: Int
        $page: Int
        $perPage: Int
        $search: String
        $type: MediaType
        $sort: [MediaSort]
        $status: MediaStatus
        $season: MediaSeason
        $genre_in: [String]
        $seasonYear: Int
        $format_in: [MediaFormat]
    ) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(
                id: $id
                search: $search
                type: $type
                sort: $sort
                status: $status
            ) {
                id
                title {
                    romaji
                }
                coverImage {
                    large
                }
            }
        }
    }
`;

const GET_ANIME_MEDIA_TREND = gql`
    query getAnimeMediaTrend($sort: [MediaTrendSort]) {
        MediaTrend(sort: $sort) {
            media {
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
    query getAnimePage($id: Int, $type: MediaType) {
        Media(id: $id, type: $type) {
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
                        coverImage {
                            large
                        }
                        type
                    }
                }
            }
        }
    }
`;

export {
    GET_ANIME_LIST,
    GET_ANIME_MEDIA_TREND,
    GET_SEARCHED_ANIME,
    GET_ANIME_CARD,
    GET_ANIME_PAGE,
};
