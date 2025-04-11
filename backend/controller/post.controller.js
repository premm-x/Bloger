import postModel from '../models/post.model.js'


export const postCreate = async (req, res) => {
    try {
        const { sections, creator } = req.body;

        if (!Array.isArray(sections) || sections.length === 0) {
            return res.status(400).json({ success: false, message: 'At least one section is required' });
        }

        const newPost = new postModel({ sections, user: creator });
        await newPost.save();

        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

export const getAllPost = async (req, res) => {
    try {

        const allblog = await postModel.find().sort({ updatedAt: -1 }).populate('user', 'username');

        res.status(200).json({ success: true, blogs: allblog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

export const userCreatedPost = async (req, res) => {
    try {

        const { creator } = req.body;

        const ownerPost = await postModel.find({ user: creator }).sort({ updatedAt: -1 }).populate('user', 'username');

        res.status(200).json({ success: true, blogs: ownerPost });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        if (!postId) {
            return res.status(400).json({ success: false, message: 'Post ID is required' });
        }

        const deletedPost = await postModel.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }

        res.status(200).json({ success: true, message: 'Post deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

export const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { sections, creator } = req.body;

        if (!postId) {
            return res.status(400).json({ success: false, message: 'Post ID is required' });
        }

        await postModel.findByIdAndUpdate(postId, { sections, user: creator });

        res.json({ message: 'Post updated' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}