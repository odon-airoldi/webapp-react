import { Link } from "react-router-dom"


export default function AppCard({ movie }) {

    return (
        <Link className="border" to={`movie/${movie.id}`}>
            <p key={movie.id}>{movie.title}</p>
        </Link>
    )
}