import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../config/userContext'
import { axiosInstance } from '../config/axios';
import { TbMenuDeep } from 'react-icons/tb';
import { CiLogout } from "react-icons/ci";



export default function ProductNavbar() {
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

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

        <div>

            <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                    <span className="text-blue-500 text-lg">✦</span>
                    <span className="font-bold text-gray-900 text-sm tracking-tight">ArticleFlow</span>
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


                <button
                    className="md:hidden text-2xl"
                    onClick={() => { setIsOpen(!isOpen) }} ><TbMenuDeep /></button>

            </nav>

            {isOpen && (
                <MobileSidebar
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    links={links}
                    userData={userData}
                    handleLogout={handleLogout}
                />
            )}

        </div>

    );

};






// ─── Icons ────────────────────────────────────────────────────────────────────

const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const MenuIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const ChevronRight = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);



function MobileSidebar({ isOpen, onClose, links, userData, handleLogout }) {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[29] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-30 pb-10 flex flex-col w-[78%] max-w-[300px] h-screen bg-white shadow-2xl overflow-hidden
                    transition-transform duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                        >

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-indigo-500 text-lg leading-none">✦</span>
                        <span className="font-bold text-sm text-slate-900 tracking-tight">ArticleFlow</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
                    {links.map((item, idx) => {
                        const isActive = item.name === "Designers";
                        return (
                            <a
                                key={idx}
                                href={item.url}
                                onClick={onClose}
                                className={`flex items-center justify-between px-3 py-3 rounded-xl border transition-all duration-150 no-underline group
                  ${isActive
                                        ? "bg-gradient-to-r from-indigo-50 to-violet-50 border-indigo-100"
                                        : "border-transparent hover:bg-slate-50 hover:border-slate-100"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`text-sm tracking-tight
                      ${isActive ? "font-semibold text-indigo-600" : "font-medium text-slate-700"}`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                                <span className={isActive ? "text-indigo-400" : "text-slate-300"}>
                                    <ChevronRight />
                                </span>
                            </a>
                        );
                    })}
                </nav>

                {/* Divider */}
                <div className="mx-5 h-px bg-slate-100 shrink-0" />

                {/* Footer */}
                <div className="px-4 pt-4 pb-8 flex flex-col gap-3 shrink-0">

                    {/* User card */}
                    <div
                        onClick={() => { navigate("/profile"); onClose(); }}
                        className="flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 active:scale-[0.98] transition-all"
                    >
                        <div className="w-10 h-10 rounded-xl shrink-0 overflow-hidden border-2 border-indigo-100 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl">
                            {userData?.image
                                ? <img src={userData.image} alt="user" className="w-full h-full object-cover" />
                                : "👩"
                            }
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate leading-tight">
                                {userData?.username || "user"}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5">View profile →</p>
                        </div>
                        {/* Online indicator */}
                        <div className="w-2 h-2 rounded-full bg-emerald-400 ring-[3px] ring-emerald-100 shrink-0" />
                    </div>

                    {/* Logout button */}
                    <button
                        onClick={() => { handleLogout(); onClose(); }}
                        className="flex items-center justify-center gap-2 py-3 rounded-xl border border-red-100 text-red-500 text-sm font-medium bg-transparent hover:bg-red-50 active:scale-[0.98] transition-all cursor-pointer"
                    >
                        <LogoutIcon />
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
}