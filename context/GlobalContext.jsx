import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();


function GlobalProvider({ children }) {

    const [dataMovies, setDataMovies] = useState(null)
    const [modalMovie, setModalMovie] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3010/api/movies')
            .then(res => res.json())
            .then(data => setDataMovies(data))
    }, [])


    return (
        <GlobalContext.Provider value={{
            dataMovies, modalMovie, setModalMovie
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

function useGlobal() {
    const context = useContext(GlobalContext)
    return context;
}

export { GlobalProvider, useGlobal }