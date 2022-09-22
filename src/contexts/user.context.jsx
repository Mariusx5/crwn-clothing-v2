import {useState,createContext} from 'react';



//as the actual value you want to access
export const UserContext = createContext({
    //empty state of an object should be null, so it can be null checked if user exists, as an empty object would still be true here.
    currentUser: null,
    setCurrentUser: ()=> null,
});


export const UserProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
