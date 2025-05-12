import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../api/query";
import CountryCard from "../components/ContryCard"
import { useParams } from "react-router-dom";

const CountryDetail = () => {
    const {code} = useParams();
    
    console.log(code);
    const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
        variables : {code: code},
    });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;  


    return (
        <>
            <CountryCard 
                name = {data.country.name}
                code = {data.country.code}     
                emoji = {data.country.emoji}
                continent = {data.country.continent.name}
            />
        </>
    )
}

export default CountryDetail;