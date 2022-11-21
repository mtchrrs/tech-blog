const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Day 1 Content",
    content: "This is the first day, what did I learn?",
    user_id: 1,
  },
  {
    id: 2,
    title: "Day 2 Content",
    content: "This is the secomd day, what did I learn?",
    user_id: 1,
  },
  {
    id: 3,
    title: "Day 3 Content",
    content: "This is the thirdday, what did I learn",
    user_id: 1,
  },
  {
    id: 4,
    title: "Day 4 Content",
    content: "This is the fourth day, what did I learn?",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
