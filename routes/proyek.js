const expess = require("express");
const router = expess.Router();

const proyekData = [
  {
    title: "aaaa",
      description: "aaa",
      startDate: "0111-11-11",
      endDate: "0001-11-11",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
      technologies: [
        "Java",
        "Script"
      ],
      repositoryLink: "http://localhost:3000/add-job",
      demoLink: "http://localhost:3000/add-job",
      role: "dddd",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      highlights: [
        "ww",
        "ww"
      ],
    _id: 1
    },
    {
      title: "web",
      description: "ss",
      startDate: "2024-06-10",
      endDate: "2024-06-18",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
      technologies: [
        "Java",
        "Script"
      ],
      repositoryLink: "http://localhost:3000/add-job",
    demoLink: "http://localhost:3000/add-job",
      role: "dddd",
      highlights: [
        "eee"
      ],
      _id:  2
    },
    {
      title: "ss",
      description: "ss",
      startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
      technologies: [
        "Java",
        "Script"
      ],
      repositoryLink: "http://localhost:3000/add-job",
      demoLink: "http://localhost:3000/add-job",
      role: "dd",
      highlights: [
        "4",
        ""
      ],
      _id:  3
    }
];
router.get("/proyek", (req, res) => {
  res.send(proyekData);
});
router.get("/proyek/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const singlePhone = proyekData.find((item) => item._id === phoneId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singlePhone);
});

module.exports = router;
