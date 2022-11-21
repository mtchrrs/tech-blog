const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Exciting day on day 1!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Exciting day on day 2!",
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;