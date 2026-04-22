import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function AppMovie() {

    const [dataMovie, setDataMovie] = useState(null)

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3010/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setDataMovie(data))
    }, [id])

    return (
        <div>
            {dataMovie && (
                <div>
                    <div className="hero">
                        <div className="hero-content">
                            <img className="ratio object-fit-cover" src={`http://localhost:3010/img/${dataMovie.image}`} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="movie-panel bg-white position-relative z-1">
                            <div className="row g-0">
                                <div className="col-3">
                                    <img className="img-fluid" src={`http://localhost:3010/img/${dataMovie.image}`} />
                                </div>
                                <div className="col-9 p-3">
                                    <div className="">
                                        <h1>{dataMovie.title}</h1>
                                        <p>{dataMovie.abstract}</p>
                                        <p>{dataMovie.director}</p>
                                        <p>{dataMovie.genre}</p>
                                        <p>{dataMovie.release_year}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )

}
