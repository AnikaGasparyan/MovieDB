import React, { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [id, setId] = useState('');
    const [media, setMedia] = useState('')
    
    return (
       < VideoContext.Provider
        value ={{
            isClicked,
            setIsClicked, 
            id,
            setId,
            media,
            setMedia

        }}
       >
           {children}
       </VideoContext.Provider>
        
    )
}