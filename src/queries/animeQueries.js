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
