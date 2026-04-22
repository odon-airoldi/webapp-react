import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function AppMovie() {

    const [dataMovie, setDataMovie] = useState(null)

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3010/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setDataMovie(data))
    }, [])

    return (
        <>
            {
                <h1>{dataMovie?.title}</h1>
            }
        </>
    )

}
