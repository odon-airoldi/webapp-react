import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import AppMovieReviews from "../components/AppMovieReviews";


export default function AppMovie() {

    const [dataMovie, setDataMovie] = useState(null)

    const { id } = useParams();

    // average vote
    const revs = dataMovie?.reviews
    let sum_votes = revs?.reduce((acc, rev) => acc + rev.vote, 0)
    let avg_votes = sum_votes / dataMovie?.reviews.length

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
                                        <p>Average vote: {avg_votes}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AppMovieReviews dataMovie={dataMovie} />
                    </div>
                </div>
            )}
        </div>

    )

}
