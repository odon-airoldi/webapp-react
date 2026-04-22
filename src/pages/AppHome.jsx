import { useEffect, useState } from "react"
import AppCard from "../components/AppCard"


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
        <>
            <div className="container py-4">
                <div className="row g-2 row-cols-5">
                    {
                        dataMovies?.map(movie => (
                            <div key={movie.id}>
                                <AppCard movie={movie} />
                                <div onClick={() => setModalMovie(movie)}>Click</div>
                            </div>
                        ))

                    }

                </div>
            </div>
            {modalMovie && (
                <div className="modal-movie" onClick={() => setModalMovie(null)}>
                    {modalMovie.title}
                </div>
            )}

        </>
    )

}
