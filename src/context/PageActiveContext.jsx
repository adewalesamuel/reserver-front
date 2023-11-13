import React, {useContext, createContext, useState} from 'react'

const PageActiveContext = createContext();

export function PageActiveProvider({children}) {
    const [page, setPage] = useState('List');
    const active = 'duration-300 bg-gradient-to-t from-tertiaire to-secondary text-white';
    return (
        <PageActiveContext.Provider value={{page, setPage, active}}>
            {children}
        </PageActiveContext.Provider>
  )
}
export const usePageActive = ()=>{
    return useContext(PageActiveContext);
}
