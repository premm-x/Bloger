import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../config/userContext'
import { PostContext } from '../config/postContext'
import { axiosInstance } from '../config/axios'

function UserProfile() {
    const navigate = useNavigate();

    const [tabSelect, setTabSelect] = useState('about');
    const [allBlog, setAllBlog] = useState([]);
    const [loading, setLoading] = useState('');

    const { userData } = useContext(UserContext);
    const { setPosts } = useContext(PostContext);

    useEffect(() => {
        async function fetchBlogs() {
            const response = await axiosInstance.post('/post/userCreatedPost', { creator: userData._id });
            setAllBlog(response.data.blogs)
        }
        fetchBlogs();
    }, [])

    const sendBlogData = (blog) => {
        setPosts(blog);
        navigate('/product/blog/detail')
    }

    async function deletePost(blog){
        setLoading('Deleting...')
        const response = await axiosInstance.delete(`/post/delete/${blog._id}`);

        if(response.status === 200){
            setLoading('Deleted, refresh the page!!')
        }else{
            setLoading('Error something is wrong...')
        }

    }

    async function editPost(blog){
        setPosts(blog);
        navigate('/product/blog/update')
    }

    return (
        <div className="min-h-screen bg-[#f5f3ff]">
            <div className="relative">
                {/* Header gradient background */}
                <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 rounded-b-[50%]" />

                {/* Stars decoration */}
                <div className="absolute top-8 left-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-blue-500 text-2xl">✦</div>
                        <div className="text-blue-500 text-2xl">✦</div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative max-w-4xl mx-auto px-4">
                    {/* Profile header */}
                    <div className="pt-16 pb-8">
                        <div className="flex items-start gap-8">
                            <img
                                src={userData.image || '/user.jpg'}
                                alt="Profile picture"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                            />
                            <div className="flex-1 pt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h1 className="text-2xl font-bold flex items-center gap-2">
                                            {userData.username || 'New User'}
                                        </h1>
                                        <p className="text-gray-600">
                                            {userData.role}<br />
                                            {userData.city}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-6 py-2 bg-black text-white rounded-md">Follow</button>
                                        <button className="px-6 py-2 bg-white text-black rounded-md border border-gray-200">Message</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center -ml-28 gap-8 mt-6">
                                    <div>
                                        <div className="font-bold">3,071</div>
                                        <div className="text-gray-600">Followers</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">208</div>
                                        <div className="text-gray-600">Following</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">20</div>
                                        <div className="text-gray-600">Posts</div>
                                    </div>
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
                                <button onClick={() => {
                                    setTabSelect('following')
                                }} className={`pb-4 cursor-pointer ${tabSelect === 'following' ? "text-black font-medium border-b-2 border-black" : "text-gray-500"}`}>
                                    Following</button>
                            </nav>
                            {tabSelect === 'post' ?
                                <Link to={'/product/blog/add'} className=" py-1 px-3 rounded-lg border-2 border-gray-500 text-black font-bold">ADD</Link>
                                : tabSelect === 'about' ?
                                    <Link to={'/profile/update'} className=" py-1 px-3 rounded-lg border-2 border-gray-500 text-black font-bold">EDIT</Link>
                                    : ''
                            }
                        </div>

                        {tabSelect === 'about' ?
                            <>
                                {/* Bio section */}
                                <div className="mb-8">
                                    <h2 className="font-bold mb-4">Bio</h2>
                                    <p className="text-gray-600">
                                        {userData.otherDetail?.bio || 'add something in bio'}
                                    </p>
                                    <div className="mt-4 text-gray-600">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span>📍</span>
                                            <span>{userData.otherDetail?.city || 'add your city'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span>🌐</span>
                                            <a href="#" className="text-blue-500">{userData.otherDetail?.Link || 'add your favorate link'}</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>📅</span>
                                            <span>Joined At, {new Date(userData.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Work section */}
                                <div className="mb-8">
                                    <h2 className="font-bold mb-4">Work</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span>💼</span>
                                            <span>{userData.otherDetail?.workAt || 'add your work'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>🎨</span>
                                            <span>Designer at Creative Cloud</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Education section */}
                                <div>
                                    <h2 className="font-bold mb-4">Education</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span>🎓</span>
                                            <span>{userData.otherDetail?.education || 'add your education'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>📚</span>
                                            <span>CS50x Introduction to Computer Science</span>
                                        </div>
                                    </div>
                                </div>
                            </> : tabSelect === 'post' ?
                                <>
                                        {loading && loading}
                                    <div className="w-full relative gap-4 grid grid-cols-1 md:grid-cols-4">
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
                                        {/* Work section */}
                                        <div className="mb-8">
                                            <h2 className="font-bold mb-4">Work</h2>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2">
                                                    <span>💼</span>
                                                    <span>Senior Software developer at Shao Isen</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span>🎨</span>
                                                    <span>Designer at Creative Cloud</span>
                                                </div>
                                            </div>
                                        </div>

                                    </> : <p>Something went wrong..!</p>
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserProfile