const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
        match: ""
    },

    thoughts: [
        {
            type: Schema.Types.ThoughsId,
            ref: 'Comment'
        }
    ],

    friends: [
        {
            type: Schema.Types.UserId,
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
userSchema.virtual('friendCount').get(function() {
    return this.friends.lenght;
});

// create User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;