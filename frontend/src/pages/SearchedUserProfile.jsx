import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../config/userContext'
import { PostContext } from '../config/postContext'
import { axiosInstance } from '../config/axios'
import { AboutTab, OtherWorkTab } from "../component/profileComponets"
import { TbMenuDeep } from "react-icons/tb"
import ProductNavbar from "../component/ProductNavbar"

let collectingUserData = null;

export const setUser = (user) => {
    collectingUserData = user;
    localStorage.setItem('userId', collectingUserData._id)
}

const tabs = ["About", "Article"];
const workCount = 54;

export default function SearchedUserProfile() {
    const navigate = useNavigate();

    const [allBlog, setAllBlog] = useState([]);
    const [following, setFollowing] = useState('');
    const [followers, setFollowers] = useState([]);
    const [currecntUserFollowing, setCurrecntUserFollowing] = useState([]);

    const [otherUserData, setOtherUserData] = useState(collectingUserData);

    const { setPosts } = useContext(PostContext);
    const { userData } = useContext(UserContext);


    useEffect(() => {
        async function fetchBlogs() {

            const userRes = await axiosInstance.post('/user/getOneUser', { userId: localStorage.getItem('userId') });
            setOtherUserData(userRes.data.user);

            const response = await axiosInstance.post('/post/userCreatedPost', { creator: localStorage.getItem('userId') });
            setAllBlog(response.data.blogs)

            const updated = await axiosInstance.get(`/follow/following/${localStorage.getItem('userId')}`);
            setFollowing(updated.data)

            const followerUpdated = await axiosInstance.get(`/follow/followers/${localStorage.getItem('userId')}`);
            setFollowers(followerUpdated.data)

            const ownerFollowing = await axiosInstance.get(`/follow/following/${localStorage.getItem('userId')}`);
            setCurrecntUserFollowing(ownerFollowing.data)

        }
        fetchBlogs();
    }, [])

    const sendBlogData = (blog) => {
        setPosts(blog);
        navigate('/product/blog/detail')
    }

    async function handleFollowClick(userId) {

        await axiosInstance.post('/follow/', { followerId: userData._id, followingId: userId });

        const updated = await axiosInstance.get(`/follow/following/${userData._id}`);
        setCurrecntUserFollowing(updated.data);

    }

    const userFollowing = currecntUserFollowing.map((user) => user._id);

    const [activeTab, setActiveTab] = useState("About");

    const tabContent = {
        Article: <OtherWorkTab allBlog={allBlog} sendBlogData={sendBlogData} />,
        About: <AboutTab otherUserData={otherUserData} />,
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
                                    src={otherUserData?.image || '/user.jpg'}
                                    alt="picture"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 md:pt-10">
                            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 md:py-5">

                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 text-center md:text-left mb-1">{otherUserData?.username || 'New User'}</h1>
                                    <p className="text-sm text-gray-500 mt-0.5 text-center md:text-left">Role - {otherUserData?.otherDetail?.role}<br /></p>
                                    <p className="text-sm text-gray-500 text-center md:text-left mb-2">Live - {otherUserData?.otherDetail?.city}</p>
                                    <div className="flex items-center justify-center gap-4">
                                        <button
                                            onClick={() => { handleFollowClick(otherUserData?._id) }}
                                            className="bg-gray-900 hover:bg-gray-700 text-white text-sm px-5 py-1.5 rounded-xl font-medium transition-colors">
                                            {userFollowing.includes(otherUserData?._id) ? 'Unfollow' : 'Follow'}
                                        </button>

                                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 text-sm px-5 py-1.5 rounded-xl font-medium transition-colors">
                                            Get in touch
                                        </button>
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
                        {tabContent[activeTab]}
                    </div>

                </div>

            </div>
        </div>
    );
}