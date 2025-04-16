import mongoose from 'mongoose';

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    followedAt: {
        type: Date,
        default: Date.now,
    },
});

followSchema.index({ follower: 1, following: 1 }, { unique: true });

export default mongoose.model('follow', followSchema);
