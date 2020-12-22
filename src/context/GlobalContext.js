import React, {useState, useContext, createContext} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
const [isSideBarOpen, setIsSideBarOpen] = useState(false)
 const [modalArticles, setModalArticles] = useState(false); 
const [sideSearch, setSideSearch] = useState(false)

const toggleSide = () => {
        setIsSideBarOpen(!isSideBarOpen)
}
 const toggleModalArticles = () => {
                setModalArticles(!modalArticles)
        }
const toggleSideSearch = () => {
                setSideSearch(!sideSearch)
        }

return (
        <AppContext.Provider
        value={{isSideBarOpen, toggleSide, modalArticles, toggleModalArticles, sideSearch, toggleSideSearch}}
       >
                {children}
        </AppContext.Provider>
)

}


export const useGlobalContext = () => {
        return useContext(AppContext)
}
export {AppContext, AppProvider} 

