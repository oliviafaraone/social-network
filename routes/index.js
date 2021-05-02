const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

// USERS  
// GET all users

// // GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// // DELETE to remove user by its _id

// // THOUGHTS
// // GET to get all thoughts

// // GET to get a single thought by its _id


// // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)


// // PUT to update a thought by its _id

// // DELETE to remove a thought by its _id


// //REACTIONS
// // POST to create a reaction stored in a single thought's reactions array field


// // DELETE to pull and remove a reaction by the reaction's reactionId value

  
  
  

module.exports = router;
