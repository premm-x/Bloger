import { createContext, useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserData(decoded.user);
            } catch (err) {
                console.error("Invalid token", err);
                localStorage.removeItem("token");
            }
        }
        setLoading(false);
    }, []);
    


    return (
        <UserContext.Provider value={{ userData, setUserData, loading, setLoading }} >
            {children}
        </UserContext.Provider>
    )
}
