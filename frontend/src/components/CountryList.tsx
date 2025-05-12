import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES } from "../api/query";
import { Link } from "react-router-dom";

const CountryList = () => {
    const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;        

    return(
        <>
            <div className="list">
                {data.countries.map((country: { name: string, emoji: string, id: string, code: string }) => (
                    <article key={country.id} className="card">
                        <Link to={`/country/${country.code}`}>
                            <h2>{country.name}</h2>
                            <span>{country.emoji}</span>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}

export default CountryList;