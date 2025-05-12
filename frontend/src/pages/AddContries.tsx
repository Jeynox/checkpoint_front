import { useMutation } from "@apollo/client";
import CountryList from "../components/CountryList";
import { ADD_COUNTRY } from "../api/mutation";
import { useState } from "react";

const AddContries = () => {
    const [countryName, setCountryName] = useState("");
    const [countryEmoji, setCountryEmoji] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [addCountry] = useMutation(ADD_COUNTRY);
    return (
        <>
            <h1 className="title-h1">Ajouter un pays</h1>
            <form 
                className="form"
                onSubmit={() => {
                addCountry({ variables: { data: {name: countryName, emoji: countryEmoji, code: countryCode} } });
            }}>
                <label htmlFor="countryName">
                    Nom du pays
                    <input id="countryName" type="text" value={countryName} onChange={e => setCountryName(e.target.value)} placeholder="Italie"/>
                </label>
                <label htmlFor="countryEmoji">
                    Emoji
                    <input id="countryEmoji" type="text" value={countryEmoji} onChange={e => setCountryEmoji(e.target.value)} placeholder="it"/>
                </label>
                <label htmlFor="countryCode">
                    Code
                    <input id="countryCode" type="text" value={countryCode} onChange={e => setCountryCode(e.target.value)} placeholder="Code"/>
                </label>
                <button type="submit">Valider</button>
            </form>
            <CountryList/>
        </>
    )
}

export default AddContries;