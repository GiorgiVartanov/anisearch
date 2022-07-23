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
                native
            }
            status
            episodes
            duration
            source
            coverImage {
                large
                medium
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

export { GET_ANIME_LIST, GET_ANIME_CARD, GET_ANIME_PAGE };
