const expess = require("express");
const router = expess.Router();

const skillData = [
  {
  title: "aaaa",
    description: "aaa",
    startDate: "0111-11-11",
    endDate: "0001-11-11",
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    technologies: [
      "Java",
      "Script"
    ],
    repositoryLink: "http://localhost:3000/add-job",
    demoLink: "http://localhost:3000/add-job",
    role: "dddd",
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
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    technologies: [
      "Java",
      "Script"
    ],
    "repositoryLink": "http://localhost:3000/add-job",
    "demoLink": "http://localhost:3000/add-job",
    "role": "dddd",
    "highlights": [
      "eee"
    ],
    _id: 2
  },
  {
    title: "ss",
    description: "ss",
    startDate: "0044-04-04",
    endDate: "0004-04-04",
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
    _id: 3
  }
];

router.get("/skils", (req, res) => {
  res.send(skillData);
});
// Single proudct parameter

router.get("/skils/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const singlePhone = skillData.find((item) => item._id === phoneId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singlePhone);
});

module.exports = router;
