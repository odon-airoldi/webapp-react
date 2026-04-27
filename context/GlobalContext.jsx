import { createContext, useContext } from "react";

const GlobalContext = createContext();


function GlobalProvider({ children }) {

    const prova = 2

    return (
        <GlobalContext.Provider value={{ prova }}>
            {children}
        </GlobalContext.Provider>
    )

}

function useGlobal() {
    const context = useContext(GlobalContext)
    return context;
}

export { GlobalProvider, useGlobal }