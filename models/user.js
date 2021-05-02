const { Schema, model } = require("mongoose");


const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //validate to match valid email address
        match: [/.+@.+\..+/]
      },
    size: {
      type: String,
      required: true,
      enum: ["Personal", "Small", "Medium", "Large", "Extra Large"],
      default: "Large",
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        //userschema
      ],
      
  },
);
//Added after updating comments field above
// get total count of comments and replies on retrieval
UserSchema.virtual("friendCount").get(function () {
    return this.comments.reduce(
      (total, comment) => total + comment.replies.length + 1,
      0
    );
  });

//Now we need to actually create the model to get the prebuilt methods that Mongoose provides. Let's add the following code to create the model and export it at the bottom of Pizza.js:
// create the Pizza model using the PizzaSchema
const User = model("User", UserSchema);

// export the Pizza model
module.exports = User;