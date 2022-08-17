import React, { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

export const SelectContext = createContext(null)
export const CloseDropdownGlobal = createContext(null)

export const useSelectOpen = () => {
    return useContext(SelectContext)
}

export const useGlobalClose = () => {

    return useContext(CloseDropdownGlobal)
}

export const SelectContextState = ({ children }) => {

    const [selectOpen, setSelect] = useState(false)

    const closeGlobally = () => {
        if (selectOpen) {
            setSelect(false)
        }
    }
   
    return <SelectContext.Provider value={{ selectOpen, setSelect }}>
        <CloseDropdownGlobal.Provider value={closeGlobally}>
            {children}
        </CloseDropdownGlobal.Provider>

    </SelectContext.Provider>
}