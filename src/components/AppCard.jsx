import { useState } from "react"

export default function AppCard({ movie, openModal }) {

    return (
        <div>
            <div className="card text-decoration-none" onClick={openModal}>
                <div className="">
                    <img src={`http://localhost:3010/img/${movie.image}`} className="card-img-top ratio ratio-3x4 object-fit-cover" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-0">{movie.title}</h5>
                </div>
            </div>
        </div >
    )
}

