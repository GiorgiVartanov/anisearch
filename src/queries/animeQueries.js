import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
    query getAnimeList(
        $id: Int
        $page: Int
        $perPage: Int
        $search: String
        $type: MediaType
        $isAdult: Boolean
        $sort: [MediaSort]
        $status: MediaStatus
        $season: MediaSeason
        $genre: String
        $seasonYear: Int
        $format: MediaFormat
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
                isAdult: $isAdult
                sort: $sort
                status: $status
                season: $season
                genre: $genre
                seasonYear: $seasonYear
                format: $format
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
                extraLarge
                color
            }
            bannerImage
            genres
            synonyms
            averageScore
            trailer {
                id
                site
                thumbnail
            }
            streamingEpisodes {
                title
                url
                site
            }
            characters(sort: [ROLE]) {
                nodes {
                    id
                    name {
                        full
                    }
                    image {
                        large
                    }
                }
            }
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

const GET_CHARACTER_PAGE = gql`
    query getCharacterPage($id: Int) {
        Character(id: $id) {
            id
            image {
                large
            }
            name {
                full
            }
            description
            media {
                edges {
                    node {
                        id
                        type
                    }
                    voiceActors(language: JAPANESE) {
                        id
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                }
                nodes {
                    id
                    type
                    title {
                        romaji
                    }
                    coverImage {
                        large
                    }
                }
            }
            age
            dateOfBirth {
                year
                month
                day
            }
        }
    }
`;

export {
    GET_CHARACTER_PAGE,
    GET_ANIME_LIST,
    GET_SEARCHED_ANIME,
    GET_ANIME_PAGE,
};
