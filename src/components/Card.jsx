

export default function Card({name, place, year, photo}) {
    return (
        <>
            <div className="container">
                <img src={photo} alt="" className="photo" />
                <div className="subinfo">
                    <p className="artistName">{name}</p>
                    <p className="subtext">Country: {place}</p>
                    <p className="subtext">Years Active: {year}</p>
                </div>
            </div>
        </>
    )
}
