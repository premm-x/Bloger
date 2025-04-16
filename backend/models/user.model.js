import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        default: null
    },
    otherDetail: {
        role: {
            type: String,
            trim: true,
        },
        workAt: {
            type: String,
            trim: true,
        },
        bio: {
            type: String,
            trim: true,
        },
        link: {
            type: String,
            trim: true,
        },
        education: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
    },
}, {timestamps: true});



const userModel = mongoose.model('users', userSchema);

export default userModel;
