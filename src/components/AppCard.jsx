import { useState } from "react"

export default function AppCard({ movie, openModal }) {

    return (
        <div>
            <div className="movie-card shadow cursor-pointer" onClick={openModal}>
                <div className="">
                    <img src={`http://localhost:3010/img/${movie.image}`} className="ratio ratio-3x4 object-fit-cover" alt={movie.title} />
                </div>
                <div className="p-3">
                    <h5 className="mb-0">{movie.title}</h5>
                </div>
            </div>
        </div >
    )
}

