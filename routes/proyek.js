const expess = require("express");
const router = expess.Router();

const proyekData = [
  {
    title: "Hemo Life",
      description: "HemoLife : A Digital Blood Donation App That Makes It Easy and Convenient HemoLife is a digital blood donation app that makes it easy for you to find blood donors, find blood donation schedules, and volunteer Blood Donors.",
      role: "Web Developer",
      type: "Collaboration",
      startDate: "0111-11-11",
      endDate: "0001-11-11",
      image: "https://i.ibb.co.com/f2d7s9t/1705212743743-1.jpg",
      technologies: [
        "JavaScript",
        "Botstrap",
        "WebPack",
        "Chart.Js",
        "PDF.js"
      ],
      repositoryLink: "http://localhost:3000/add-job",
      demoLink: "http://localhost:3000/add-job",
      highlights: [
        "Find Blood Donors",
        "Find Blood Donation Schedules",
        "Become a volunteer Blood Donors",
      ],
    _id: 1
    },
    {
      title: "Dashboard Data Analytics",
      description: "Website Analytics adalah sebuah website yang dimana membantu untuk mengalanisa data yang di dapatatkan dari sesnor ph dan nh3, website ini merupakan website dashboard IoT",
      type: "Individual",
      startDate: "2024-06-10",
      endDate: "2024-06-18",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      image: "https://i.ibb.co.com/f2d7s9t/1705212743743-1.jpg",
      technologies: [
        "Reac.js",
        "Tailwincss",
        "TaypeScript",
        "Apex Chart"
      ],
      repositoryLink: "http://localhost:3000/add-job",
    demoLink: "http://localhost:3000/add-job",
      role: "Web Developer",
      highlights: [
        "Dashboard Analytics",
        "Filter Data With Date and Type",
        "Download Data",
        ""
      ],
      _id:  2
    },
    {
      title: "ss",
      description: "ss",
      startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
      image: "https://i.ibb.co.com/f2d7s9t/1705212743743-1.jpg",
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

router.post("/", (req, res) => {
  const newProyek = req.body;

  // Menambahkan proyek baru ke dalam array proyekData
  proyekData.push(newProyek);

  // Mengirim respons yang menunjukkan proyek baru telah ditambahkan
  res.status(201).json({ message: "Proyek added successfully", proyek: newProyek });
});

module.exports = router;
