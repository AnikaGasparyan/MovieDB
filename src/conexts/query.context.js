import React, { createContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const [value, setValue] = useState('');    
    return (
       < QueryContext.Provider
        value ={{
            query,
            setQuery,
            value,
            setValue,
        }}
       >
           {children}
       </QueryContext.Provider>
        
    )
}