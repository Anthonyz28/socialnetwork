const { Schema, model, Types } = require('mongoose');
const dataFormat = require('../utils/dataFormat');

const ReactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjextId()
    },
    reactionBody: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema ({
    thoughtText:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// get count of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.lenght;
});

// create the thought schema
const Thought = model('Thought', ThoughtSchema);

//export the thought model
module.exports = Thought;