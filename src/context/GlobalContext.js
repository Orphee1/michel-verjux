import React, {useState, useContext, createContext} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
const [isSideBarOpen, setIsSideBarOpen] = useState(false)

const toggleSide = () => {
        setIsSideBarOpen(!isSideBarOpen)
}


return (
        <AppContext.Provider
        value={{isSideBarOpen, toggleSide}}
       >
                {children}
        </AppContext.Provider>
)

}


export const useGlobalContext = () => {
        return useContext(AppContext)
}
export {AppContext, AppProvider} 

