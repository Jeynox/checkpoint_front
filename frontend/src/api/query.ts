import { gql } from "@apollo/client"

export const GET_ALL_COUNTRIES = gql`
    query GetAllCountries {
        countries {
            name
            emoji
            continent {
            name
            }
            id
            code
        }
    }
`;

export const GET_COUNTRY_BY_CODE = gql`
    query Country($code: String!) {
        country(code: $code) {
            id
            code
            name
            emoji
            continent {
            name
            }
        }
    }
`;