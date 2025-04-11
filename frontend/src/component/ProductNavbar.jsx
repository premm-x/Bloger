import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../config/userContext'

const ProductNavbar = () => {
    const navigate = useNavigate();
    
    const { userData } = useContext(UserContext);

    return (
        <>
            <nav className="border-b border-gray-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-2">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/donate/9/9b/Wfm-logo-white-circle.png" alt="Logo" className="h-8 w-8" />
                            <span className="text-xl ml-1.5 font-semibold">untitled.ui</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-10">
                            <a href="/product/home" className="text-sm text-gray-600 hover:text-gray-900">Home</a>

                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                                <button
                                    className="ml-2 bg-black text-white text-sm px-4 py-2 rounded-md"
                                >
                                    Search
                                </button>
                            </div>


                            <div className='flex gap-2'>
                            <p>{userData.username}</p>

                            <div onClick={()=>{navigate('/profile')}} className='cursor-pointer bg-gray-400 rounded-full flex items-center justify-center w-10 h-10'>
                               <img src={userData.image || '/user.jpg'}  
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