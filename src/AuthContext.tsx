
//import { useNavigate } from "react-router-dom";
import React, { createContext, useState } from "react";
import { LogoutUser, getUser } from "./authService";

interface AuthContextType {
    user: any | null; // <-- add user here in the interface
    logoutSuspended: () => void;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null, // <-- provide initial value here
    logoutSuspended: () => {},
    error: null,
    setError: () => {},
    setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any | null>(getUser());

    const logoutSuspended = () => {
        LogoutUser(); // clears token + user
        setUser(null);
        setError("Your account has been suspended");
    };

    return (
        <AuthContext.Provider value={{ user, logoutSuspended, error, setError, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
