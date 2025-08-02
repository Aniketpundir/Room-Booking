import mongoose, { isValidObjectId } from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum : ['admin','client','landlord'],
        default:'client'
    },
    starred:{
        type:String
    },
    createdAt:{
        type : Date,
        default: Date.now
    }

});

const UserModel = UserSchema('User',UserSchema);

export default UserModel;