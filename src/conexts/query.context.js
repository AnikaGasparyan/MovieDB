import React, { createContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const [value, setValue] = useState(''); 
    const [page, setPage] = useState(1);   
    return (
       < QueryContext.Provider
        value ={{
            query,
            setQuery,
            value,
            setValue,
            page, 
            setPage,
        }}
       >
           {children}
       </QueryContext.Provider>
        
    )
}