import { gql } from "@apollo/client";

const GET_STAFF_PAGE = gql`
    query getStaffPage($id: Int) {
        Staff(id: $id) {
            name {
                full
            }
            image {
                large
            }
            description
            primaryOccupations
            dateOfBirth {
                year
                month
                day
            }
            dateOfDeath {
                year
                month
                day
            }
            age
            yearsActive
            homeTown
            characters(sort: [FAVOURITES_DESC]) {
                edges {
                    node {
                        id
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                }
            }
        }
    }
`;

export { GET_STAFF_PAGE };
