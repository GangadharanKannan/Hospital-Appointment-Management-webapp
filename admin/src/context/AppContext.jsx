import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const calculateAge = (dob) => {
        const today = new Date();
        const birtDate = new Date(dob);

        const age = today.getFullYear() - birtDate.getFullYear()
        return age
    }
    const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }
    const currencySymbol = '$'
    const value ={
        calculateAge,
        slotDateFormat,
        currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider