<div className="pt-16 pb-8">
                        <div className="flex items-start gap-8">
                            <img
                                src={otherUserData?.image || '/user.jpg'}
                                alt="Profile picture"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                            />
                            <div className="flex-1 pt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h1 className="text-2xl font-bold flex items-center gap-2">
                                            {otherUserData.username || 'New User'}
                                        </h1>
                                        <p className="text-gray-600">
                                            Role - {otherUserData.otherDetail?.role}<br />
                                            Live - {otherUserData.otherDetail?.city}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">

                                        <button onClick={() => { handleFollowClick(otherUserData._id) }} className="px-6 py-2 bg-black text-white rounded-md">
                                            {userFollowing.includes(otherUserData._id) ? 'UnFollow' : 'Follow'}
                                        </button>

                                    </div>
                                </div>
                                <div className="flex items-center justify-center -ml-28 gap-8 mt-6">
                                    <div>
                                        <div className="font-bold">{followers.length}</div>
                                        <div className="text-gray-600">Followers</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{following.length}</div>
                                        <div className="text-gray-600">Following</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{allBlog.length}</div>
                                        <div className="text-gray-600">Posts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>