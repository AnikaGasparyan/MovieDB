import React, { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    return (
       < VideoContext.Provider
        value ={{
            isClicked,
            setIsClicked
        }}
       >
           {children}
       </VideoContext.Provider>
        
    )
}