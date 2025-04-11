import React, { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../config/axios';
import { UserContext } from '../config/userContext';
import { PostContext } from '../config/postContext';

export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    formData.append('cloud_name', 'dbvj72pyo');

    const res = await fetch('https://api.cloudinary.com/v1_1/dbvj72pyo/image/upload', {
        method: 'POST',
        body: formData,
    });

    const data = await res.json();
    return data.secure_url;
};

const UpdatePost = () => {
    const { userData } = useContext(UserContext);
    const { posts } = useContext(PostContext);

    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState('');

    useEffect(() => {
        if (posts?.sections) {
            setSections(posts.sections);
        }
    }, [posts]);

    const handleChange = (index, field, value) => {
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            if (!updatedSections[index]) return prevSections;
            updatedSections[index][field] = value;
            return updatedSections;
        });
    };

    const handleAddMore = () => {
        setSections([...sections, { title: '', content: '', image: null }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            for (const item of sections) {
                if (!item.image || typeof item.image === 'string') continue;

                setLoading('Uploading image...');
                const uploadedImage = await uploadToCloudinary(item.image);
                item.image = uploadedImage;
            }

            setLoading('Updating post...');
            const res = await axiosInstance.put(`/post/update/${posts._id}`, {
                sections,
                creator: userData._id,
            });

            console.log(res)

            setLoading('Updated successfully!');
        } catch (error) {
            console.error('Error updating post:', error);
            setLoading('Error updating post');
        }

    };

    return (
        <div className="max-w-xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-5">Update Blog</h2>
            <form onSubmit={handleSubmit}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                {index === 0 ? 'Title' : 'Sub-Title / Section'}
                            </label>
                            <input
                                type="text"
                                value={section.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Content</label>
                            <textarea
                                value={section.content}
                                onChange={(e) => handleChange(index, 'content', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md h-20"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center gap-8 my-4">
                            {section.image && (
                                <img
                                    src={
                                        typeof section.image === 'string'
                                            ? section.image
                                            : URL.createObjectURL(section.image)
                                    }
                                    alt="Selected"
                                    className="w-32 h-32 object-cover mt-2 rounded-lg border"
                                />
                            )}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    {section.image ? 'Change Image' : 'Add Image'}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        handleChange(index, 'image', e.target.files[0])
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleAddMore}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add More
                </button>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                >
                    {loading ? loading : 'Update'}
                </button>
            </form>
        </div>
    );
};

export default UpdatePost;
