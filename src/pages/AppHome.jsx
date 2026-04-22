import { useEffect, useState } from "react"
import AppCard from "../components/AppCard"
import { Link } from "react-router-dom"


export default function AppHome() {

    const [dataMovies, setDataMovies] = useState(null)
    const [modalMovie, setModalMovie] = useState(null)

    console.log(modalMovie)

    useEffect(() => {
        fetch('http://localhost:3010/api/movies')
            .then(res => res.json())
            .then(data => setDataMovies(data))
    }, [])



    return (
        <section>
            <div className="container py-4">
                <div className="row g-2 row-cols-5">
                    {
                        dataMovies?.map(movie => (
                            <AppCard key={movie.id} movie={movie} openModal={() => setModalMovie(movie)} />
                        ))
                    }
                </div>
            </div>
            {modalMovie && (
                <div className="bg-primary bg-opacity-25 position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                    <div className="modal-card bg-white p-3">
                        <h3 className="h5">{modalMovie.title}</h3>
                        <p>{modalMovie.abstract}</p>
                        <Link className="" to={`movie/${modalMovie.id}`}>View</Link>
                        <div onClick={() => setModalMovie(null)}>close</div>
                    </div>
                </div>
            )}

        </section>
    )

}
