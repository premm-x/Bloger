import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">uwwa</div>
            <div className="flex items-center gap-4">
                <button className="text-gray-600">Book a call</button>
                <Link to={'/signin'} className="bg-black text-white px-4 py-2 rounded-full">Let's connect</Link>
            </div>
        </nav>
    );
};



export default Navbar;