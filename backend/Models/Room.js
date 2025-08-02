import mongoose from "mongoose";

const roomDataSChema = new mongoose.Schema({
        Title : {
            type:String,
            required:true
        },
        description : {
            type:String,
            required:true
        },
        location : {
            longi : String,
            lati : String,
            address : Object
        }
});

const RoomSchema = new mongoose.Schema({
    landlord : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    IsAvailable : {
        type : Boolean,
        default : true
    },
    roomData : {
        type:roomDataSChema,
        required:true
    }

});

const RoomModel = mongoose.model("Room",RoomModel);

export default RoomModel;