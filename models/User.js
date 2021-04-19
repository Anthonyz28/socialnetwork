const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required!',
        trim: true
    },

    email: {
        type: String,
        required: 'Email is required!',
        unique: true,
        match: [/.+@+\../, "Please use a valid email address"]
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
           ref: 'User'
        }
    ],
},  
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

 // firendCount
UserSchema.virtual('friendCount').get(function() {
    return this.friends.lenght;
});

// create User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;