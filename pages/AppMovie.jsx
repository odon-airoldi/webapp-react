import { useParams } from "react-router-dom"

export default function AppMovie() {

    const { id } = useParams();

    return (
        <>
            <h1>Single movie {id}</h1>
        </>
    )

}
