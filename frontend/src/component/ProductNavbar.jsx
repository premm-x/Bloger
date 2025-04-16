import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../config/userContext'
import { axiosInstance } from '../config/axios';

const ProductNavbar = () => {
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        async function fetchBlogs() {
            const userRes = await axiosInstance.post('/user/getLogInUser', { userId: userData._id });
            setUserData(userRes.data.user);
        }
        fetchBlogs();
    }, [])

    return (
        <>
            <nav className="border-b border-gray-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-2">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/donate/9/9b/Wfm-logo-white-circle.png" alt="Logo" className="h-8 w-8" />
                            <span className="text-xl ml-1.5 font-semibold">untitled.ui</span>
                        </div>

                        <div className="flex items-center space-x-10">
                            <Link to="/profile/search/user" className="ml-4 p-2 rounded-full bg-gray-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </Link>

                            <Link to="/product/home" className="hidden md:block text-gray-600 hover:text-gray-900">Home</Link>

                            <div className='flex items-center gap-2'>
                                <p>{userData?.username}</p>

                                <div onClick={() => { navigate('/profile') }} className='cursor-pointer bg-gray-400 rounded-full flex items-center justify-center w-10 h-10'>
                                    <img src={userData?.image || '/user.jpg'}
                                        alt='userImg'
                                        className='w-10 h-10 rounded-full object-cover ' />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>

        </>
    );

};



export default ProductNavbar;
