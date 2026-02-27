import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../config/userContext'
import { axiosInstance } from '../config/axios';
import { TbMenuDeep } from 'react-icons/tb';
import { CiLogout } from "react-icons/ci";

export default function ProductNavbar() {
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        async function fetchBlogs() {
            const userRes = await axiosInstance.post('/user/getOneUser', { userId: userData._id });
            setUserData(userRes.data.user);
        }
        fetchBlogs();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
    };

    const links = [
        {
            id: 1,
            name: "Dashboard",
            url: "/product/home"
        },
        {
            id: 2,
            name: "Friends",
            url: "/profile/search/user"
        },
        {
            id: 3,
            name: "Projects",
            url: "#"
        },
        {
            id: 4,
            name: "Work",
            url: "#"
        }
    ]

    return (
        <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-1.5">
                <span className="text-blue-500 text-lg">✦</span>
                <span className="font-bold text-gray-900 text-sm tracking-tight">Portfolia</span>
            </div>

            <div className="hidden md:flex items-center gap-5 text-sm text-gray-600">
                {links.map((item, idx) => (
                    <a key={idx} href={item.url} className={`hover:text-gray-900 transition-colors ${item.name === "Designers" ? "text-gray-900 font-medium" : ""}`}>
                        {item.name}
                    </a>
                ))}

            </div>
            <div className="hidden md:flex items-center gap-8">
                
                <button onClick={() => { handleLogout() }} >
                    <CiLogout className='text-lg cursor-pointer' />
                </button>

                <div className='flex items-center gap-2'>
                    <p>{userData?.username}</p>

                    <div onClick={() => { navigate('/profile') }} className='cursor-pointer bg-gray-400 rounded-full flex items-center justify-center w-10 h-10'>
                        <img src={userData?.image || '/user.jpg'}
                            alt='userImg'
                            className='w-10 h-10 rounded-full object-cover ' />
                    </div>
                </div>
            </div>

            <TbMenuDeep className="md:hidden text-2xl" />

        </nav>

    );

};


