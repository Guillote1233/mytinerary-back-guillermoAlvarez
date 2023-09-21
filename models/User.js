import { model, Schema } from "mongoose";

const userSchema = Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: 'https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png'},
    country: {type: String, required: true}

},
{
    timestamps: true
});

const User = model('user', userSchema);

export default User