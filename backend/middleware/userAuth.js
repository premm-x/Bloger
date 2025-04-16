import jwt from "jsonwebtoken";
import userModel from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {

    const token = localStorage.getItem('token') || req.headers.authorization.split(" ")[1];
    
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id) //.select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware;
