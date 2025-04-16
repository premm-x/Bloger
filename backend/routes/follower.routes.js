import express from 'express';
import Follow from '../models/follower.js';

const router = express.Router();


router.post('/', async (req, res) => {

    const { followerId, followingId } = req.body;

    if (followerId === followingId) {
        return res.status(400).json({ message: "You can't follow yourself" });
    }

    try {
        const existingFollow = await Follow.findOne({ follower: followerId, following: followingId });

        if (existingFollow) {
            // Unfollow
            await Follow.deleteOne({ _id: existingFollow._id });
            return res.json({ message: 'Unfollowed successfully' });

        } else {
            // Follow
            await Follow.create({ follower: followerId, following: followingId });
            return res.json({ message: 'Followed successfully' });

        }
    }
    catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.get('/following/:userId', async (req, res) => {
    const follows = await Follow.find({ follower: req.params.userId }).populate('following');
    res.json(follows.map(f => f.following));
});



router.get('/followers/:userId', async (req, res) => {
    const followers = await Follow.find({ following: req.params.userId }).populate('follower');
    res.json(followers.map(f => f.follower));
});

export default router;
