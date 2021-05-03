const router = require('express').Router();
const {
  addThought,
  removeThought,
  addResponse,
  removeResponse
} = require('../../controllers/thought-controller');

// /api/Thought/<userId>
router.route('/:userId').post(addThought);

// /api/Thought/<userId>/<ThoughtId>
router
  .route('/:userId/:ThoughtId')
  .put(addResponse)
  .delete(removeThought);

// /api/Thoughts/<userId>/<ThoughtId>/<responseId>
router.route('/:userId/:ThoughtId/:responseId').delete(removeResponse);

module.exports = router;