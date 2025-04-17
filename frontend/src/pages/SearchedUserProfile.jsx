import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../config/userContext'
import { PostContext } from '../config/postContext'
import { axiosInstance } from '../config/axios'

let collectingUserData = null;

export const setUser = (user) => {
    collectingUserData = user;
    localStorage.setItem('userId', collectingUserData._id)
}

function SearchedUserProfile() {
    const navigate = useNavigate();

    const [tabSelect, setTabSelect] = useState('about');
    const [allBlog, setAllBlog] = useState([]);
    const [loading, setLoading] = useState('');
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
                <div className="relative max-w-4xl mx-auto px-4 mb-8">
                    {/* Profile header */}

                    <div className=" pt-4 md:pt-16 pb-8">
                        <div className=" flex md:flex-row flex-col items-center justify-between gap-8">

                            <div className=" flex items-center justify-center gap-8">
                                <img
                                    src={otherUserData?.image || '/user.jpg'}
                                    alt="Profile picture"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                                />
                                <div className=" flex items-center justify-between mb-2">
                                    <div>
                                        <h1 className="text-2xl font-bold flex items-center gap-2">
                                            {otherUserData?.username || 'New User'}
                                        </h1>
                                        <p className="text-gray-600 text-sm">
                                            Role - {otherUserData?.otherDetail?.role}<br />
                                            Live - {otherUserData?.otherDetail?.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col items-center justify-center gap-8 md:gap-4 -mt-4 md:mt-0">

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

                                <div className="flex gap-2">

                                    <button onClick={() => { handleFollowClick(otherUserData._id) }} className="px-6 py-2 bg-black text-white rounded-md">
                                        {userFollowing.includes(otherUserData?._id) ? 'Unfollow' : 'Follow'}
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>


                    {/* Profile tabs and content */}
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 mb-8">
                            <nav className="flex gap-8">
                                <button onClick={() => {
                                    setTabSelect('about');
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'about' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    About</button>
                                <button onClick={() => {
                                    setTabSelect('post')
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'post' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    Posts</button>
                            </nav>
                        </div>

                        {tabSelect === 'about' ?
                            <div className="md:px-16 ">
                                <div className="flex md:flex-row flex-col w-full justify-between items-start">

                                    {/* Bio section */}
                                    <div className=" mb-8">
                                        <h2 className="font-bold mb-2">Bio</h2>
                                        <p className="text-gray-600  md:w-[400px] ">
                                            {otherUserData?.otherDetail?.bio || 'add something in bio'}
                                        </p>
                                        <div className="mt-4 text-gray-600">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-gray-900 font-bold">City -</span>
                                                <span>📍{otherUserData?.otherDetail?.city || 'add your city'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-gray-900 font-bold">Link -</span>
                                                <a href="#" className="text-blue-500">🌐{otherUserData?.otherDetail?.Link || 'add your favorate link'}</a>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Work section */}
                                    <div className="mb-8 ">
                                        <h2 className="font-bold mb-2">Work</h2>
                                        <div className="space-y-4">
                                            <div className="flex overflow-auto md:h-32 w-[230px] items-start gap-2">
                                                <span>{otherUserData?.otherDetail?.workAt || 'add your work'}</span>
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
                                                <span>{otherUserData?.otherDetail?.education || 'add your education'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex text-gray-400 text-sm items-center gap-2">
                                        <span>Joined At, {new Date(otherUserData?.createdAt).toLocaleDateString()}</span>
                                    </div>

                                </div>

                            </div> : tabSelect === 'post' ?
                                <>
                                    {loading && loading}
                                    <div className="w-full relative place-items-center gap-4 grid grid-cols-1 md:grid-cols-4">
                                        {allBlog.length > 0 ? allBlog.map((blog, idx) => (
                                            <div key={idx} onClick={() => { if (blog.sections) sendBlogData(blog.sections); }} className="group w-48 relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">

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

                                </> : <p>Something went wrong..!</p>
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchedUserProfile