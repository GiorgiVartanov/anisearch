import { gql } from "@apollo/client";

const GET_MANGA_LIST = gql`
    query getMangaList($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(id: $id, search: $search, type: MANGA) {
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
    }
`;

const GET_MANGA_CARD = gql`
    query getMangaCard($id: Int) {
        Media(id: $id, type: MANGA) {
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

const GET_SEARCHED_MANGA = gql`
    query getSearchedManga(
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

const GET_MANGA_PAGE = gql`
    query getMangaPage($id: Int) {
        Media(id: $id, type: MANGA) {
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
            chapters
            volumes
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

export { GET_MANGA_LIST, GET_SEARCHED_MANGA, GET_MANGA_CARD, GET_MANGA_PAGE };
