import { useEffect, useState } from "react"
import AppCard from "../components/AppCard"


export default function AppHome() {

    const [dataMovies, setDataMovies] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3010/api/movies')
            .then(res => res.json())
            .then(data => setDataMovies(data))
    }, [])

    return (
        <>
            <h1>homepage</h1>
            {
                dataMovies?.map(movie => (
                    <div key={movie.id}>
                        <AppCard movie={movie} />
                    </div>
                ))

            }
        </>
    )

}
