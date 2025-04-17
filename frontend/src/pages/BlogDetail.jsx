import React, { useContext } from 'react';
import ProductNavbar from '../component/ProductNavbar';
import { PostContext } from '../config/postContext';

const BlogDetail = () => {

    const { posts } = useContext(PostContext)

    return (
        <div className="min-h-screen bg-white">

            <ProductNavbar />

            <main className="max-w-[1000px] mx-auto px-4 py-8">
                {/* top section */}
                <div className="py-12">
                    {posts.slice(0,1).map((post, idx) => (
                        <div key={idx}>
                            <h1 className="text-[40px] leading-tight font-semibold text-gray-900 mb-4 max-w-[600px]">
                                {post.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-[600px]">
                                {post.content}
                            </p>
                            <div className="h-[400px] mb-12 ">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-12">
                    {/* side titles */}
                    <aside className="w-64 flex-shrink-0">
                        <nav className="sticky top-8">
                            {posts.slice(1).map((section) => (
                                <a
                                    key={section._id}
                                    href={`#${section._id}`}
                                    className="block py-2 text-[15px] text-gray-600 hover:text-gray-900"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* right-side blog */}

                    {posts.length > 1 ?

                        <div className="flex-grow">
                            {posts.slice(1).map((item) => (
                                <section key={item._id} id={item._id} className="mb-16">
                                    <h2 className="text-2xl font-semibold mb-6">{item.title}</h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {item.content}
                                    </p>
                                </section>
                            ))}
                        </div>

                        : <p></p>
                    }

                </div>

            </main>


            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">10x your growth with Untitled</h2>
                        <p className="text-gray-400 mb-6">Join over 20,000+ designers already growing with Untitled.</p>
                        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100">
                            Get started now
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Overview</a></li>
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Solutions</a></li>
                                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Releases</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">About us</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Press</a></li>
                                <li><a href="#" className="hover:text-white">News</a></li>
                                <li><a href="#" className="hover:text-white">Media kit</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                                <li><a href="#" className="hover:text-white">Events</a></li>
                                <li><a href="#" className="hover:text-white">Help centre</a></li>
                                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                                <li><a href="#" className="hover:text-white">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Use cases</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Startups</a></li>
                                <li><a href="#" className="hover:text-white">Enterprise</a></li>
                                <li><a href="#" className="hover:text-white">Government</a></li>
                                <li><a href="#" className="hover:text-white">SaaS</a></li>
                                <li><a href="#" className="hover:text-white">Marketplaces</a></li>
                                <li><a href="#" className="hover:text-white">Ecommerce</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Social</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Twitter</a></li>
                                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white">Facebook</a></li>
                                <li><a href="#" className="hover:text-white">GitHub</a></li>
                                <li><a href="#" className="hover:text-white">AngelList</a></li>
                                <li><a href="#" className="hover:text-white">Dribbble</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Cookies</a></li>
                                <li><a href="#" className="hover:text-white">Licenses</a></li>
                                <li><a href="#" className="hover:text-white">Settings</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400">
                        © 2024 Untitled UI. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default BlogDetail;