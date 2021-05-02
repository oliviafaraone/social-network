const router = require('express').Router();
const {
  addThought,
  removeThought,
  addResponse,
  removeResponse
} = require('../../controllers/thought-controller');

// /api/Thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/Thoughts/<userId>/<ThoughtId>
router
  .route('/:userId/:ThoughtId')
  .put(addResponse)
  .delete(removeThought);

// /api/Thoughts/<userId>/<ThoughtId>/<responseId>
router.route('/:userId/:ThoughtId/:responseId').delete(removeResponse);

module.exports = router;