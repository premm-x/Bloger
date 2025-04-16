import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";
import { useNavigate } from 'react-router-dom'
import { setUser } from "./SearchedUserProfile";
import { UserContext } from "../config/userContext";

const SearchUser = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    const [following, setFollowing] = useState([]);

    const { userData } = useContext(UserContext)


    useEffect(() => {
        async function fetchBlogs() {
            const response = await axiosInstance.get('/user/getAllUser');

            const loginUserRemove = response.data.users.filter((user) => {
                return user.email !== userData.email
            })
            setUsers(loginUserRemove)

            const Resfollowing = await axiosInstance.get(`/follow/following/${userData._id}`);
            setFollowing(Resfollowing.data)


        }
        fetchBlogs();
    }, [])

    const filteredUsers = users.filter((user) =>
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

    const followedIds = following.map(user => user._id);
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Search Users</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6"
            />
            <ul className="w-full max-w-md bg-white rounded-md shadow-md divide-y divide-gray-200">

                {sortedUsers.map((user) => {

                    const isFollowing = followedIds.includes(user._id);

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
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition 
                                    ${isFollowing
                                        ? 'bg-gray-200 text-black hover:bg-gray-300'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                            >
                                {isFollowing ? 'Unfollow' : 'Follow'}
                            </button>
                        )}


                    </li>)
                })}

            </ul>

        </div>
    );
};

export default SearchUser;