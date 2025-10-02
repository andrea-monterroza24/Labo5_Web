import "../Styles/CardScientist.css";

const CardScientist = ({ name, image,
    profession, awards, discorveries
}) => {
    return (
        <div className="card-scientist">
            <h2>{name}</h2>
            <img src={image} alt={name} className="card-image" />
            <ul>
                <li><strong>Profesion: </strong>{profession}</li>
                <li><strong>Premios: </strong>{awards.join(', ')}</li>
                <li><strong>Descubrio: </strong>{discorveries.join(', ')}</li>
            </ul>
        </div>
    )
}

export default CardScientist;