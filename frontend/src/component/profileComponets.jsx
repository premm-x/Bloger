// ─── Mockups ──────────────────────────────────────────────────────────────────

const VPNMockup = () => (
    <div className="w-full h-full flex items-center justify-center gap-2 p-3">
        <div className="w-20 h-36 bg-gray-900 rounded-2xl border border-gray-700 flex flex-col overflow-hidden shadow-lg">
            <div className="bg-gray-800 p-2 flex-1">
                <div className="text-green-400 text-xs font-mono">00:45:57</div>
                <div className="mt-2 w-full h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 opacity-60"></div>
                </div>
                <div className="mt-2 space-y-1">
                    <div className="h-1 bg-blue-500 rounded opacity-60 w-3/4"></div>
                    <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                </div>
            </div>
        </div>
        <div className="w-24 h-40 bg-gray-900 rounded-2xl border border-blue-500 flex flex-col overflow-hidden shadow-xl z-10">
            <div className="bg-gradient-to-b from-blue-900 to-gray-900 p-2 flex-1">
                <div className="text-white text-xs font-bold">VPN</div>
                <div className="mt-1 w-full h-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full bg-blue-400"></div>
                        </div>
                    </div>
                    <div className="absolute top-1 right-1 text-xs text-gray-400">🌐</div>
                </div>
                <div className="mt-1 bg-blue-900 rounded p-1">
                    <div className="text-xs text-blue-300">Trusted servers</div>
                    <div className="text-xs text-gray-400">with one tap</div>
                </div>
            </div>
        </div>
    </div>
);

const DashboardMockup = () => (
    <div className="w-full h-full flex items-center justify-center p-2">
        <div className="w-48 h-36 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-purple-50 px-3 py-2 border-b border-gray-100">
                <div className="text-xs font-bold text-gray-800">Bookings</div>
                <div className="flex gap-2 mt-1">
                    {["$5,984", "24", "4.2"].map((v, i) => (
                        <div key={i} className="text-xs">
                            <div className="font-semibold text-gray-800">{v}</div>
                            <div className="text-gray-400 text-[9px]">{["Revenue", "Rooms", "Rating"][i]}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-2 space-y-1">
                {[{ name: "Ocean Suite", color: "bg-purple-200", w: "w-3/4" }, { name: "City View", color: "bg-pink-200", w: "w-1/2" }, { name: "Garden Room", color: "bg-blue-200", w: "w-2/3" }].map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className={`h-2 rounded ${row.color} ${row.w}`}></div>
                        <span className="text-[9px] text-gray-500">{row.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const HealthMockup = () => (
    <div className="w-full h-full flex items-center justify-center gap-2 p-3">
        <div className="w-20 h-36 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="h-16 bg-blue-50 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg">👨‍⚕️</div>
            </div>
            <div className="p-2">
                <div className="text-[9px] font-semibold text-gray-800">Book your</div>
                <div className="text-[9px] text-gray-500">doctor any time</div>
                <div className="mt-1 bg-blue-500 rounded px-1 py-0.5 text-[8px] text-white text-center">Book Now</div>
            </div>
        </div>
        <div className="w-24 h-40 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-10">
            <div className="bg-gradient-to-b from-blue-100 to-white h-20 relative">
                <div className="w-14 h-14 bg-blue-200 rounded-full absolute top-3 left-5 flex items-center justify-center text-2xl">👩‍⚕️</div>
            </div>
            <div className="p-2 mt-1">
                <div className="text-[9px] font-bold text-gray-800">Dr. Sarah</div>
                <div className="text-[9px] text-gray-500">Cardiologist</div>
                <div className="mt-1 text-yellow-400 text-[9px]">★ 4.9</div>
                <div className="mt-1 text-[8px] text-blue-400">7 June · 6:00 PM</div>
            </div>
        </div>
    </div>
);

const FinanceMockup = () => (
    <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-28 h-40 bg-gray-900 rounded-2xl border border-emerald-700 overflow-hidden shadow-xl">
            <div className="p-2">
                <div className="text-[9px] text-emerald-400">Total Balance</div>
                <div className="text-sm font-bold text-white">$12,480</div>
                <div className="mt-2 h-12 flex items-end gap-0.5">
                    {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                        <div key={i} className="flex-1 bg-emerald-500 rounded-sm opacity-80" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[8px]">
                        <span className="text-gray-400">Income</span><span className="text-emerald-400">+$3,200</span>
                    </div>
                    <div className="flex justify-between text-[8px]">
                        <span className="text-gray-400">Expenses</span><span className="text-red-400">-$1,840</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const TravelMockup = () => (
    <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-36 h-36 bg-white rounded-2xl border border-orange-200 shadow-lg overflow-hidden">
            <div className="h-16 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center text-3xl">🏝️</div>
            <div className="p-2">
                <div className="text-[9px] font-bold text-gray-800">Bali, Indonesia</div>
                <div className="text-[8px] text-gray-400">7 days · 2 travelers</div>
                <div className="mt-1 flex gap-1">
                    {["✈️", "🏨", "🗺️"].map((e, i) => (
                        <div key={i} className="w-6 h-6 bg-orange-50 rounded-lg flex items-center justify-center text-[10px]">{e}</div>
                    ))}
                </div>
                <div className="mt-1 bg-orange-400 rounded px-2 py-0.5 text-[8px] text-white text-center">Explore</div>
            </div>
        </div>
    </div>
);

const EcomMockup = () => (
    <div className="w-full h-full flex items-center justify-center p-3">
        <div className="w-40 h-36 bg-white rounded-xl border border-rose-100 shadow-lg overflow-hidden">
            <div className="h-14 bg-rose-50 flex items-center justify-center text-2xl">👗</div>
            <div className="p-2">
                <div className="text-[9px] font-bold text-gray-800">Summer Collection</div>
                <div className="text-[8px] text-gray-400">124 products</div>
                <div className="mt-1 flex gap-1">
                    {["#f9a8d4", "#fda4af", "#fcd34d"].map((c, i) => (
                        <div key={i} className="w-4 h-4 rounded-full border border-white shadow" style={{ background: c }}></div>
                    ))}
                </div>
                <div className="mt-1 flex justify-between items-center">
                    <span className="text-[9px] font-semibold text-gray-800">$29.99</span>
                    <div className="bg-rose-500 rounded px-1.5 py-0.5 text-[8px] text-white">Shop</div>
                </div>
            </div>
        </div>
    </div>
);

const mockupMap = { vpn: VPNMockup, dashboard: DashboardMockup, health: HealthMockup, finance: FinanceMockup, travel: TravelMockup, ecom: EcomMockup };


// ─── Tab Panels ───────────────────────────────────────────────────────────────

export const OtherWorkTab = ({ allBlog, sendBlogData }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {allBlog?.length > 0 ? allBlog.map((blog, idx) => (
                <div key={idx} onClick={() => { if (blog.sections) sendBlogData(blog.sections); }} className="group w-72 relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">

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
                <p className="w-lvw text-gray-800 text-center">No post</p>
            }

        </div>
    )
};

export const UserWorkTab = ({ allBlog, sendBlogData, deletePost, editPost }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

            {allBlog.length > 0 ? allBlog.map((blog, idx) => (
                <div key={idx} onClick={() => { if (blog.sections) sendBlogData(blog.sections); }} className="group w-72 relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">

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
    )
};

export const AboutTab = ({ otherUserData, formatLink=null }) => (
    <div className="mt-4 max-w-xl">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-500">Available for freelance</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-2">About me</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {otherUserData?.otherDetail?.bio || "Hi, I'm Irene — an Interface and Brand Designer based in San Antonio, TX. I specialize in creating thoughtful digital experiences that bridge beautiful aesthetics with purposeful UX. With 6+ years in the industry, I've worked with startups, scale-ups, and Fortune 500 companies."}
        </p>

        <h3 className="text-base font-semibold text-gray-900 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {["UI Design", "Brand Identity", "Design Systems", "Prototyping", "User Research", "Figma", "Framer", "Motion Design"].map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{skill}</span>
            ))}
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-3">Experience</h3>
        <div className="space-y-3">
            {[
                { role: "Senior UI Designer", company: "Figma Inc.", period: "2022 – Present" },
                { role: "Brand Designer", company: "Studio Helm", period: "2019 – 2022" },
                { role: "Junior Designer", company: "Freelance", period: "2017 – 2019" },
            ].map((exp, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm mt-0.5">🏢</div>
                    <div>
                        <div className="text-sm font-medium text-gray-900">{exp.role}</div>
                        <div className="text-xs text-gray-400">{exp.company} · {exp.period}</div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-4 text-gray-600">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-900 font-bold">City -</span>
                <span>📍{otherUserData?.otherDetail?.city || 'add your city'}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-900 font-bold">Link -</span>
                {
                    formatLink == null ? <a href="#" className="text-blue-500">🌐{otherUserData?.otherDetail?.Link || 'add your favorate link'}</a> :
                        <a href={formatLink(otherUserData?.otherDetail?.link)} target="_blank" rel="noopener noreferrer" className="text-blue-500">🌐{otherUserData?.otherDetail?.link || 'add your favorite link'}</a>
                }
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

    </div>
);

export const Following = ({ searchTerm, handleSearchChange, sortedUsers, sendUserData, userData, handleFollowClick, userFollowing }) => (
    <div className="flex flex-col items-center min-h-screen py-4">
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
);

export const Followers = ({ searchTerm, handleSearchChange, sortedUsers, sendUserData, userData, handleFollowClick, userFollowing }) => (
    <div className="flex flex-col items-center min-h-screen py-4">
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
);




export const MoodboardsTab = ({ moodboards }) => (
    <div className="mt-4">
        <p className="text-sm text-gray-500 mb-4">Color palettes and mood collections curated by Irene.</p>
        <div className="grid grid-cols-2 gap-4">
            {moodboards.map((mb) => (
                <div key={mb.id} className="cursor-pointer rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex h-20">
                        {mb.colors.map((color, i) => (
                            <div key={i} className="flex-1" style={{ background: color }}></div>
                        ))}
                    </div>
                    <div className="p-3">
                        <div className="text-sm font-semibold text-gray-900">{mb.title}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{mb.mood}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const LikesTab = ({ likedProjects }) => (
    <div className="mt-4">
        <p className="text-sm text-gray-500 mb-4">Projects Irene has liked and found inspiring.</p>
        <div className="grid grid-cols-3 gap-4">
            {likedProjects.map((p) => (
                <div key={p.id} className="group cursor-pointer">
                    <div className={`rounded-2xl h-36 ${p.bg} flex items-center justify-center text-4xl`}>
                        {p.emoji}
                    </div>
                    <div className="mt-2">
                        <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                        <div className="text-xs text-gray-400">by {p.author}</div>
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-400">{p.tags}</span>
                            <span className="text-xs text-gray-400">♥ {p.likes}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);






