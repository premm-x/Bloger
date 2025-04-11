import React, { useContext, useEffect, useState } from 'react'
import ProductNavbar from '../component/ProductNavbar'
import { Link, useNavigate } from 'react-router-dom'
import { PostContext } from '../config/postContext'
import { axiosInstance } from '../config/axios'

function ProductMain() {
    const navigate = useNavigate();


    const { setPosts } = useContext(PostContext);
    const [allBlog, setAllBlog] = useState([]);

    const blogCards = [
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
            tags: ["Product", "Tools", "design"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/1/800/600",
            tags: ["Product", "Tools"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/12/800/600",
            tags: ["Product", "Tools"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/3/800/600",
            tags: ["Product", "Tools"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/4/800/600",
            tags: ["Product", "Tools"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/5/800/600",
            tags: ["Product", "Tools"]
        },
        {
            author: "Phoenix Baker",
            date: "19 Jan 2022",
            title: "Migrating to Linear 101",
            content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image: "https://picsum.photos/seed/6/800/600",
            tags: ["Product", "Tools"]
        },
    ];

    useEffect(() => {
        async function fetchBlogs() {
            const response = await axiosInstance.get('/post/allpost');
            setAllBlog(response.data.blogs)
        }
        fetchBlogs();
    }, [])

    const blogInfo = (blog) => {
        setPosts([blog]);
        navigate('/product/blog/detail')
    }

    const sendBlogData = (blog) => {
        setPosts(blog);
        navigate('/product/blog/detail')
    }

    return (
        <div className="min-h-screen bg-white">

            <ProductNavbar />

            {/* top title */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="text-sm text-gray-600 mb-4">The blog</div>
                <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
                    Writings from our team
                    <svg className="w-8 h-8 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </h1>
                <p className="text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
            </div>

            {/* Blogs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* poster blog */}
                <div className="mb-12 cursor-pointer">
                    {blogCards.slice(0, 1).map((item, idx) => (
                        <div key={idx} onClick={() => { blogInfo(item) }} className="relative h-[400px] rounded-2xl overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80">
                                <div className="text-white">
                                    <div className="mb-2">{item.author} • {item.date}</div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                    <div className="flex gap-2 mt-4">
                                        {item.tags &&
                                            item.tags.map((tag) => (
                                                <span key={tag} className="bg-white/20 px-3 py-1 rounded-full text-sm">{tag}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {allBlog && allBlog.map((blog, idx) => (
                        <div key={idx} onClick={() => { sendBlogData(blog.sections) }} className="group cursor-pointer">
                            <img className="rounded-2xl object-cover w-full h-[200px]" src={blog.sections[0]['image']} alt={blog.sections[0]['title']} />
                            <div className="space-y-2">
                                <div className="text-gray-600 mt-4">{blog.user.username} • {new Date(blog.updatedAt).toLocaleDateString()}</div>
                                <h2 className="text-xl font-semibold group-hover:text-blue-600">
                                    {blog.sections[0]['title'].length > 20 ? blog.sections[0]['title'].substring(0, 20) + '...' : blog.sections[0]['title']}
                                </h2>
                                <p className="text-gray-600">
                                    {blog.sections[0]['content'].length > 20 ? blog.sections[0]['content'].substring(0, 20) + '...' : blog.sections[0]['content']}
                                </p>

                            </div>
                        </div>
                    ))}


                    {blogCards.slice(1).map((item, idx) => (
                        <div key={idx} onClick={() => { blogInfo(item) }} className="group cursor-pointer">
                            <div className="mb-4">
                                <img
                                    src={item.image}
                                    alt="Blog post"
                                    className="rounded-2xl object-cover w-full h-[200px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="text-gray-600">{item.author} • {item.date}</div>
                                <h3 className="text-xl font-semibold group-hover:text-blue-600">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <div className="flex gap-2">
                                    {item.tags &&
                                        item.tags.map((tag) => (
                                            <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{tag}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                </div>







                {/* sliding
                <div className="flex justify-between items-center mt-12">
                    <button className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>
                    <div className="flex gap-2">
                        {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                            <button
                                key={index}
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${page === 1 ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-gray-600">
                        Next
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div> */}

            </div>

        </div>
    )
}

export default ProductMain