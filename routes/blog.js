const express = require("express");
const router = express.Router();

const blogsData = [
  {
    _id: 4001,
    title: "White tshirt",
    price: 30,
    previousPrice: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "accessories",
    image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
    isNew: true,
    brand: "Unknown",
  },

];

router.get("/blogs", (req, res) => {
  res.send(blogsData);
});


router.get("/blogs/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const singlePhone = blogsData.find((item) => item._id === phoneId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singlePhone);
});

module.exports = router;
