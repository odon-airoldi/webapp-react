import { Link } from "react-router-dom"
import { useGlobal } from "../../context/GlobalContext";


export default function AppMovieModal() {

    const { dataMovies, modalMovie, setModalMovie } = useGlobal();


    return (
        <>
            {modalMovie && (
                <div className="backdrop position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                    <div className="modal-card bg-white p-3 position-relative">
                        <h3 className="h5">{modalMovie.title}</h3>
                        <p>{modalMovie.abstract}</p>
                        <Link className="btn btn-secondary" to={`movie/${modalMovie.id}`} onClick={() => setModalMovie(null)}>View</Link>
                        <div className="cursor-pointer position-absolute top-0 start-100 translate-middle bg-black p-1 rounded-circle" onClick={() => setModalMovie(null)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255,255,255)" className="d-block" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}