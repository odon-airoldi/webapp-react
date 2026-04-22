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
            <div className="container py-4">
                <div className="row g-2 row-cols-5">
                    {
                        dataMovies?.map(movie => (
                            <div key={movie.id}>
                                <AppCard movie={movie} />
                            </div>
                        ))

                    }
                </div>
            </div>
        </>
    )

}
