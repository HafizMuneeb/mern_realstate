import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
    },
}, { timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;