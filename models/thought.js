const { Schema, model } = require("mongoose");

//const dateFormat = require("../utils/dateFormat");
const reactionSchema = new Schema (
    {
      reationId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      //Max 280 characters

    },
    username: {
      type: String,
      required: true,
      },
   createdAt: {
       type: Date,
       default: Date.now,
       //Use a getter method to format the timestamp on query
   }
  },
  {
    toJSON: {
      getters: true
    }
  }
  );

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: [({ length }) => 280 >= length >= 1, 'Password should be between 1-280']
      //Must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
  },
  username: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reactions: [reactionSchema]
  });


//
  ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });


    //Now we need to actually create the model to get the prebuilt methods that Mongoose provides. Let's add the following code to create the model and export it at the bottom of Pizza.js:
// create the Pizza model using the PizzaSchema
const Thought = model("Thought", ThoughtSchema);

// export the Pizza model
module.exports = Thought;