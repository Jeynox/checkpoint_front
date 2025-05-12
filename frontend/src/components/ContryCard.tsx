interface CountryCardProps {
    name: string;
    emoji: string;
    code: string;
    continent: {
        name: string;
    };
}

const CountryCard = ({name, code, emoji, continent}: CountryCardProps) => {
    return (
        <>
            <h1 className="title-h1">Voici le descriptif de {name}</h1>
            <div className="detail-card">
                <span>{emoji}</span>
                <span><b>Nom : </b>{name} ({code})</span>
                <span><b>Continent : </b>{continent.name}</span>
            </div>
        </>
    );
}

export default CountryCard;