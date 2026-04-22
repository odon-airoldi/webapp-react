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
                                        <p>Director: {dataMovie.director}</p>
                                        <p>Genre: {dataMovie.genre}</p>
                                        <p>Release year: {dataMovie.release_year}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <h3 className="h4">Reviews</h3>
                            {
                                dataMovie.reviews.map(review => (
                                    <div key={review.id}>
                                        <div className="py-3">
                                            <div>{review.name} Vote: {review.vote}</div>
                                            <div>{review.text}</div>
                                            <div>{new Date(review.created_at).toLocaleDateString("it-IT")}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>

    )

}
