const express = require("express");
const router = express.Router();

const watchData = [
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
      _id:  2
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
      _id:  3
    }
];
router.get("/services", (req, res) => {
  res.send(watchData);
});

module.exports = router;
