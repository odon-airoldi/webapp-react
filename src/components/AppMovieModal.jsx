import { Link } from "react-router-dom"
import { useGlobal } from "../../context/GlobalContext";


export default function AppMovieModal() {

    const { dataMovies, modalMovie, setModalMovie } = useGlobal();


    return (
        <>
            {modalMovie && (
                <div className="bg-primary bg-opacity-25 position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                    <div className="modal-card bg-white p-3">
                        <h3 className="h5">{modalMovie.title}</h3>
                        <p>{modalMovie.abstract}</p>
                        <Link className="" to={`movie/${modalMovie.id}`} onClick={() => setModalMovie(null)}>View</Link>
                        <div onClick={() => setModalMovie(null)}>close</div>
                    </div>
                </div>
            )}
        </>
    )

}