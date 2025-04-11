import React, { useContext, useState } from 'react';
import { axiosInstance } from '../config/axios'
import { UserContext } from '../config/userContext';


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

const AddBlog = () => {

    const [sections, setSections] = useState([
        { title: '', content: '', image: null }
    ]);

    const { userData } = useContext(UserContext);

    const [loading, setLoading] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            for (const item of sections) {

                if (!item.image) {
                    item.image = 'https://res.cloudinary.com/dbvj72pyo/image/upload/v1744290243/qpvpiizge3qqfesy86vq.jpg'
                    break;
                }

                setLoading('Uploading...');

                const res = await uploadToCloudinary(item.image);
                item.image = res;

            }
            setLoading('Done!!');
            const response = await axiosInstance.post('/post/create', { sections, creator: userData._id });

        } catch (error) {
            console.error('Error uploading images:', error);
        } finally {
            setTimeout(() => {
                setLoading('');
            }, 1000);
        }


    };

    const handleChange = async (index, field, value) => {
        const updatedSections = [...sections];
        updatedSections[index][field] = value;
        setSections(updatedSections);
    };

    const handleAddMore = () => {
        setSections([...sections, { title: '', content: '', image: null }]);
    };



    return (
        <div className="max-w-xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-5">Add New Blog  </h2>
            <form onSubmit={handleSubmit}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">{index === 0 ? "Title" : "Sub-Title / Section"}</label>
                            <input
                                type="text"
                                value={section.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Content</label>
                            <textarea
                                value={section.content}
                                onChange={(e) => handleChange(index, 'content', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Add Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleChange(index, 'image', e.target.files[0])}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                ))}

                <button type="button" onClick={handleAddMore} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add More
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded ml-2">
                    Submit
                </button>
                {loading}

            </form>

        </div>
    );
};

export default AddBlog;
