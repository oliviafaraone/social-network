const { Schema, model } = require("mongoose");


const UserSchema = new Schema(
  {
    username: {
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
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);
//Added after updating comments field above
// get total count of comments and replies on retrieval
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

//Now we need to actually create the model to get the prebuilt methods that Mongoose provides. Let's add the following code to create the model and export it at the bottom of Pizza.js:
// create the Pizza model using the PizzaSchema
const User = model("User", UserSchema);

// export the Pizza model
module.exports = User;