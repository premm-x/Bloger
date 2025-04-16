import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(201).json({ message: 'User registered successfully', user: newUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({  user }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({ message: 'Login successful', token, user });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const update = async (req, res) => {
    try {
        const { email, image, role, bio, link, workAt, education, city } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }


        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            {
                $set: {
                    image,
                    otherDetail: {
                        role,
                        bio,
                        link,
                        workAt,
                        education,
                        city,
                    },
                },
            },
            { new: true } 
        );

        const token = jwt.sign({  updatedUser }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({ message: 'User updated successfully', token, updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getAllUser = async (req, res) => {
    try {

        const users = await userModel.find({});
        res.status(200).json({ message: 'Users retrieved successfully', users });
        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const getLogInUser = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await userModel.findOne({ _id : userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ 
            message: 'User retrieved successfully', 
            user
        });

    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};