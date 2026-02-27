import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../config/userContext'
import { PostContext } from '../config/postContext'
import { axiosInstance } from '../config/axios'
import { setUser } from "./SearchedUserProfile";
import { jwtDecode } from "jwt-decode";
import { TbMenuDeep } from "react-icons/tb";
import { AboutTab, Followers, Following, UserWorkTab } from "../component/profileComponets"
import ProductNavbar from "../component/ProductNavbar"


export function Userrofile() {

    return (
        <div className="min-h-screen bg-[#f5f3ff]">
            <div className="relative">
                {/* Header gradient background */}
                <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 rounded-b-4xl md:rounded-b-[50%]" />

                {/* Stars decoration */}
                <div className="absolute top-8 left-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-blue-500 text-2xl">✦</div>
                        <div className="text-blue-500 text-2xl">✦</div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative w-[350px] md:w-3xl lg:w-4xl mx-auto px-4 mb-8">
                    {/* Profile header */}
                    <div className=" pt-4 md:pt-16 pb-8">
                        <div className=" relative flex md:flex-row flex-col items-center justify-between gap-8">

                            <div className=" flex items-center justify-center gap-8">
                                <img
                                    src={userData.image || '/user.jpg'}
                                    alt="Profile picture"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                                />
                                <div className=" flex items-center justify-between mb-2">
                                    <div>
                                        <h1 className="text-2xl font-bold flex items-center gap-2">
                                            {userData.username || 'New User'}
                                        </h1>
                                        <p className="text-gray-600 text-sm">
                                            Role - {userData.otherDetail?.role}<br />
                                            Live - {userData.otherDetail?.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-4 md:mt-0">
                                <div onClick={() => { setLogout(!logout) }} className="cursor-pointer absolute top-0 md:-top-5 -right-2 md:-right-5">
                                    <img className="w-4 h-4" src="/three-dots.svg" alt="three-dot" />
                                </div>

                                {logout &&
                                    <button onClick={() => { handleLogout() }} className="absolute top-5 md:top-1 -right-5 md:-right-15 rounded-md flex items-center justify-center bg-white py-1 px-4">
                                        Logout
                                    </button>}

                                <div className="flex items-center justify-center gap-8">
                                    <div>
                                        <div className="font-bold text-center">{followers.length}</div>
                                        <div className="text-gray-600">Followers</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-center">{following.length}</div>
                                        <div className="text-gray-600">Following</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-center">{allBlog.length}</div>
                                        <div className="text-gray-600">Posts</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Profile tabs and content */}
                    <div className="bg-white  rounded-xl md:mt-5 p-8 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center pb-2 md:pb-2 justify-between border-b border-gray-200 mb-8">
                            <nav className="flex text-sm md:text-md gap-8">
                                <button onClick={() => {
                                    setTabSelect('about');
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'about' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    About</button>
                                <button onClick={() => {
                                    setTabSelect('post')
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'post' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    Posts</button>
                                <button onClick={() => {
                                    setTabSelect('followers')
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'followers' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    Followers</button>
                                <button onClick={() => {
                                    setTabSelect('following')
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'following' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    Following</button>

                            </nav>
                            {tabSelect === 'post' ?
                                <Link to={'/product/blog/add'} className=" py-1 px-3 text-sm md:text-md rounded-lg border md:border-2 border-gray-500 text-black font-bold">ADD</Link>
                                : tabSelect === 'about' ?
                                    <Link to={'/profile/update'} className=" py-1 px-3 text-sm md:text-md rounded-lg border md:border-2 border-gray-500 text-black font-bold">EDIT</Link>
                                    : ''
                            }
                        </div>

                        {tabSelect === 'about' ?
                            <div className="md:px-16 ">
                                <div className="flex md:flex-row flex-col w-full justify-between items-start">

                                    {/* Bio section */}
                                    <div className=" mb-8">
                                        <h2 className="font-bold mb-2">Bio</h2>
                                        <p className="text-gray-600  md:w-[400px] ">
                                            {userData.otherDetail?.bio || 'add something in bio'}
                                        </p>
                                        <div className="mt-4 text-gray-600">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-gray-900 font-bold">City -</span>
                                                <span>📍{userData.otherDetail?.city || 'add your city'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-gray-900 font-bold">Link -</span>
                                                <a href={formatLink(userData.otherDetail?.link)} target="_blank" rel="noopener noreferrer" className="text-blue-500">🌐{userData.otherDetail?.link || 'add your favorite link'}</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Work section */}
                                    <div className="mb-8 ">
                                        <h2 className="font-bold mb-2">Work</h2>
                                        <div className="space-y-4">
                                            <div className="flex overflow-auto md:h-32 w-[230px] items-start gap-2">
                                                <span>{userData.otherDetail?.workAt || 'add your work'}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex flex-col gap-10 w-full justify-between items-start">

                                    {/* Education section */}
                                    <div className="">
                                        <h2 className="font-bold mb-2">Education</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center md:w-[400px]">
                                                <span>{userData.otherDetail?.education || 'add your education'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex text-gray-400 text-sm items-center gap-2">
                                        <span>Joined At, {new Date(userData.createdAt).toLocaleDateString()}</span>
                                    </div>

                                </div>

                            </div> : tabSelect === 'post' ?
                                <>
                                    {loading && loading}
                                    <div className="w-full relative place-items-center gap-4 grid grid-cols-1 md:grid-cols-4">
                                        {allBlog.length > 0 ? allBlog.map((blog, idx) => (
                                            <div key={idx} onClick={() => { if (blog.sections) sendBlogData(blog.sections); }} className="group w-48 relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">

                                                <div className="hidden z-30 gap-1 group-hover:flex absolute top-2 right-2">
                                                    <button onClick={(e) => { e.stopPropagation(); deletePost(blog); }} className="bg-white cursor-pointer flex items-center justify-center w-8 h-8 rounded-full">
                                                        <img className="w-4 h-4" src="/delete.svg" alt="delete" />
                                                    </button>
                                                    <button onClick={(e) => { e.stopPropagation(); editPost(blog) }} className="bg-white cursor-pointer flex items-center justify-center w-8 h-8 rounded-full">
                                                        <img className="w-4 h-4" src="/edit.svg" alt="edit" />
                                                    </button>
                                                </div>

                                                {blog.sections && blog.sections[0] && (
                                                    <img className="w-full h-32 object-cover" src={blog.sections[0]['image']} alt={blog.sections[0]['title']} />
                                                )}
                                                <div className="p-2 overflow-hidden">
                                                    {blog.sections && blog.sections[0] && (
                                                        <>
                                                            <h2 className="text-xl font-semibold mb-2">
                                                                {blog.sections[0]['title'].length > 20 ? blog.sections[0]['title'].substring(0, 20) + '...' : blog.sections[0]['title']}
                                                            </h2>
                                                            <p className="text-gray-700 text-sm">
                                                                {blog.sections[0]['content'].length > 20 ? blog.sections[0]['content'].substring(0, 20) + '...' : blog.sections[0]['content']}
                                                            </p>
                                                        </>
                                                    )}
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-gray-500 text-xs text-right">{blog.user?.username || 'Unknown User'}</p>
                                                        <p className="text-gray-500 text-xs text-right">
                                                            {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : 'Unknown Date'}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                            :
                                            <p className="absolute top-0  w-full text-gray-300 text-center">No post</p>
                                        }
                                    </div>

                                </> : tabSelect === 'following' ?
                                    <>

                                        <div className="flex flex-col items-center min-h-screen">
                                            <input
                                                type="text"
                                                placeholder="Search by name"
                                                value={searchTerm}
                                                onChange={handleSearchChange}
                                                className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6"
                                            />
                                            <ul className="w-full max-w-md bg-white rounded-md shadow-md divide-y divide-gray-200">

                                                {sortedUsers.map((user) => {

                                                    return (<li
                                                        onClick={() => { sendUserData(user) }}
                                                        key={user._id}
                                                        className="p-4 cursor-pointer flex justify-between hover:bg-gray-50 text-gray-700"
                                                    >
                                                        <div className="flex items-center justify-center gap-2">
                                                            <img src={user.image || '/user.jpg'} className="w-10 h-10 object-cover rounded-full" />
                                                            <p>{user.username}</p>
                                                        </div>

                                                        {user._id !== userData._id && (
                                                            <button
                                                                onClick={(e) => handleFollowClick(e, user._id)}
                                                                className='px-4 py-2 rounded-md text-sm font-semibold transition bg-gray-200 text-black hover:bg-gray-300'
                                                            >
                                                                Unfollow
                                                            </button>
                                                        )}


                                                    </li>)
                                                })}

                                            </ul>

                                        </div>

                                    </> : tabSelect === 'followers' ?
                                        <>

                                            <div className="flex flex-col items-center min-h-screen">
                                                <input
                                                    type="text"
                                                    placeholder="Search by name"
                                                    value={searchTerm}
                                                    onChange={handleSearchChange}
                                                    className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6"
                                                />
                                                <ul className="w-full max-w-md bg-white rounded-md shadow-md divide-y divide-gray-200">

                                                    {sortedUsers.map((user) => {

                                                        return (<li
                                                            onClick={() => { sendUserData(user) }}
                                                            key={user._id}
                                                            className="p-4 cursor-pointer flex justify-between hover:bg-gray-50 text-gray-700"
                                                        >
                                                            <div className="flex items-center justify-center gap-2">
                                                                <img src={user.image || '/user.jpg'} className="w-10 h-10 object-cover rounded-full" />
                                                                <p>{user.username}</p>
                                                            </div>

                                                            {user._id !== userData._id && (
                                                                <button
                                                                    onClick={(e) => handleFollowClick(e, user._id)}
                                                                    className='px-4 py-2 rounded-md text-sm font-semibold transition bg-gray-200 text-black hover:bg-gray-300'
                                                                >
                                                                    {userFollowing.includes(user._id) ? 'Unfollow' : 'Follow'}
                                                                </button>
                                                            )}


                                                        </li>)
                                                    })}

                                                </ul>

                                            </div>

                                        </> : <p>Something went wrong..!</p>
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}




// ──────────────────────────────────────────────────────────────────────


const tabs = ["About", "Article", "Following", "Followers"];
const workCount = 54;

export default function UserProfile() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("About");

    const [allBlog, setAllBlog] = useState([]);
    const [loading, setLoading] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [logout, setLogout] = useState(false);


    const { userData, setUserData } = useContext(UserContext);
    const { setPosts } = useContext(PostContext);

    useEffect(() => {
        async function fetchBlogs() {

            const userRes = await axiosInstance.post('/user/getOneUser', { userId: userData._id });
            setUserData(userRes.data.user);

            const response = await axiosInstance.post('/post/userCreatedPost', { creator: userData._id });
            setAllBlog(response.data.blogs)

            const updated = await axiosInstance.get(`/follow/following/${userData._id}`);
            setFollowing(updated.data)

            const followerUpdated = await axiosInstance.get(`/follow/followers/${userData._id}`);
            setFollowers(followerUpdated.data)

        }
        fetchBlogs();
    }, [])

    const formatLink = (url) => {
        if (!url) return "#";
        return url.startsWith("http://") || url.startsWith("https://")
            ? url
            : `https://${url}`;
    };

    const sendBlogData = (blog) => {
        setPosts(blog);
        navigate('/product/blog/detail')
    }

    async function deletePost(blog) {
        setLoading('Deleting...')
        const response = await axiosInstance.delete(`/post/delete/${blog._id}`);

        if (response.status === 200) {
            // setLoading('Deleted, refresh the page!!')
            setLoading('')
            window.location.reload();
        } else {
            setLoading('Error something is wrong...')
        }
    }

    async function editPost(blog) {
        setPosts(blog);
        navigate('/product/blog/update')
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
    };

    const filteredUsers = activeTab === 'Following' ? following.filter((user) =>
        searchTerm ? user.username.toLowerCase().startsWith(searchTerm.toLowerCase()) : true
    ) : followers.filter((user) =>
        searchTerm ? user.username.toLowerCase().startsWith(searchTerm.toLowerCase()) : true
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const sortedUsers = [...filteredUsers].sort((a, b) =>
        a.username.localeCompare(b.username)
    );

    function sendUserData(user) {

        setUser(user);

        navigate('/profile/search/user/profile')
    }

    async function handleFollowClick(e, userId) {
        e.stopPropagation()

        const followerId = userData._id;
        const followingId = userId;

        const res = await axiosInstance.post('/follow/', { followerId, followingId });

        const updated = await axiosInstance.get(`/follow/following/${userData._id}`);
        setFollowing(updated.data);

    }

    const userFollowing = following.map(user => user._id);

    

    const tabContent = {
        About: <AboutTab otherUserData={userData} formatLink={formatLink}  />,
        Article: <UserWorkTab allBlog={allBlog} sendBlogData={sendBlogData} deletePost={deletePost} editPost={editPost} />,

        Following: <Following searchTerm={searchTerm} handleSearchChange={handleSearchChange} sortedUsers={sortedUsers}
            sendUserData={sendUserData} userData={userData} handleFollowClick={handleFollowClick} userFollowing={userFollowing} />,

        Followers: <Followers searchTerm={searchTerm} handleSearchChange={handleSearchChange} sortedUsers={sortedUsers}
            sendUserData={sendUserData} userData={userData} handleFollowClick={handleFollowClick} userFollowing={userFollowing} />,
    };

    return (
        <div className="bg-gray-100  font-sans">
            <div className="w-full bg-white overflow-hidden border border-gray-200">

                <ProductNavbar />

                {/* Hero banner */}
                <div className="relative h-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200"></div>
                    <div
                        className="absolute top-4 left-1/2 -translate-x-1/4 w-48 h-24 rounded-full opacity-50"
                        style={{ background: "radial-gradient(ellipse, #a78bfa 0%, #c4b5fd 40%, transparent 70%)" }}
                    ></div>
                    <div
                        className="absolute top-0 right-20 w-32 h-20 rounded-full opacity-40"
                        style={{ background: "radial-gradient(ellipse, #f9a8d4 0%, #fbcfe8 50%, transparent 70%)" }}
                    ></div>
                </div>

                {/* Profile section */}
                <div className="px-5 md:px-12 pb-4">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-5 -mt-10">
                        {/* Avatar */}
                        <div className="w-44 h-44 rounded-2xl overflow-hidden z-20  border-4 border-white shadow-lg flex-shrink-0 bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-b from-amber-200 to-amber-400 flex items-end justify-center">
                                <img
                                    src={userData?.image || '/user.jpg'}
                                    alt="picture"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 md:pt-10">
                            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 md:py-5">

                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 text-center md:text-left mb-1">{userData?.username || 'New User'}</h1>
                                    <p className="text-sm text-gray-500 mt-0.5 text-center md:text-left">Role - {userData?.otherDetail?.role}<br /></p>
                                    <p className="text-sm text-gray-500 text-center md:text-left mb-2">Live - {userData?.otherDetail?.city}</p>

                                    <div className="flex items-center justify-center gap-4">
                                        <Link to={'/product/blog/add'} className="bg-gray-900 hover:bg-gray-700 text-white text-sm px-5 py-1.5 rounded-xl font-medium transition-colors">ADD</Link>
                                        <Link to={'/profile/update'} className="bg-gray-900 hover:bg-gray-700 text-white text-sm px-5 py-1.5 rounded-xl font-medium transition-colors">EDIT</Link>
                                    </div>
                                </div>

                                {/* Stats + avatars */}
                                <div className="flex flex-col items-end my-5 gap-3">

                                    {/* Stats */}
                                    <div className="flex gap-8 text-center">
                                        <div>
                                            <div className="text-xs text-gray-400">Followers</div>
                                            <div className="text-xl font-bold text-gray-900">{followers.length}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400">Following</div>
                                            <div className="text-xl font-bold text-gray-900">{following.length}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400">Articles</div>
                                            <div className="text-xl font-bold text-gray-900">{allBlog.length}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center md:justify-start gap-6 mt-4 border-b border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-sm font-medium transition-colors relative ${activeTab === tab ? "text-gray-900 border-b-2 border-gray-900 -mb-px" : "text-gray-500 hover:text-gray-700"}`}
                            >
                                {tab}
                                {tab === "Work" && <span className="ml-1 text-xs text-gray-400">{workCount}</span>}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-48">

                        {loading && loading}

                        {tabContent[activeTab]}
                    </div>
                </div>

            </div>
        </div>
    );
}