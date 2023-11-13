import React, {useContext, createContext, useState} from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({children})=>{
    const [textColor, setTextColor] = useState('white');

    return (
        <DashboardContext.Provider value={{textColor, setTextColor}}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashBoardContext = ()=>{
    return useContext(DashboardContext);
}
