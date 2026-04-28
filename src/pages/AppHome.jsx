import { useEffect, useState } from "react"
import AppCard from "../components/AppCard"
import { Link } from "react-router-dom"
import { useGlobal } from "../../context/GlobalContext";
import AppMovieModal from "../components/AppMovieModal";


export default function AppHome() {

    const { dataMovies, modalMovie, setModalMovie } = useGlobal();

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
            <AppMovieModal />

        </section>
    )

}
