import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from "react";
import { UserContext } from "../config/userContext";
import { Navigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/signin');
        }
    }, [token, navigate]);


    const { userData, loading } = useContext(UserContext);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-background text-primary">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <h2 className="text-xl font-medium animate-pulse">Loading...</h2>
                </div>
            </div>
        );
    }

    if (!userData) {
        return <Navigate to="/signin" replace />;
    }

    return children;


};

export default UserProtectWrapper;