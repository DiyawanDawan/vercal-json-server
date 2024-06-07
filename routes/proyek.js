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
      title: "Cynema",
      description: "Cynema merupakan sebuah proyek yang menampilkan list film dan acara TV, adapun data yangh di gunakan adalah open api dari omdb, website ini ada dua versi, yatu v1 menggunakan vanila javascript",
      startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/0Y9WGyV/Technology-Pitch-Deck.png",
      technologies: [
        "JavaScript",
        "React.js",
        "Tailwincss",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/sinema.git",
      demoLink: "https://cinemasfilm.netlify.app/",
      role: "Web Developer",
      highlights: [
        "List Film",
        "List TV",
        "Upcaming",
        "Top Rated",
        "Discover TV",
        "Recomendation",
        "Detail",
        "PlayNow",
        "Seris",
      ],
      _id:  3
    },
    {
      title: "TOTO LIST",
      description: "Todo list adalah sebuah website catetean sederhana yang dapat menyimpan list TODO di local storage browser ",
      startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/1vR4VXv/Brown-Simple-Digital-Marketing-Presentation.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Todo-Apps.git",
      demoLink: "https://manajmentime.netlify.app/",
      role: "Web Developer",
      highlights: [
        "Add Todo",
        "Delete Todo",
        "Archive",
      ],
      _id:  4
    },
    {
      title: "Coffe Senja",
      description: "Merupakan sebuah website yang menampilkan list product coffe, dan berbagai macan menu coffe",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/09c4sqy/Technology-Pitch-Deck-1.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/CoffeSenja.git",
      demoLink: "https://app.netlify.com/sites/coffesenja/",
      role: "Web Developer",
      highlights: [
        "Home",
        "Product",
        "Countact",
        "Manu",
      ],
      _id:  5
    },
    {
      title: "Coffe Senja",
      description: "Merupakan sebuah website yang menampilkan list product coffe, dan berbagai macan menu coffe",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/09c4sqy/Technology-Pitch-Deck-1.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/CoffeSenja.git",
      demoLink: "https://app.netlify.com/sites/coffesenja/",
      role: "Web Developer",
      highlights: [
        "Home",
        "Product",
        "Countact",
        "Manu",
      ],
      _id:  6
    },
    {
      title: "Restourant",
      description: "Website restourant merupakan sebuah website yang menampilan beberapa list restourant dengn beberapa fitur seperti like restouran explore restourant",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/09c4sqy/Technology-Pitch-Deck-1.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
        "Progresive Web Apps (PWA)",
        "Image Loader",
        "End to End Testing E2E"
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Restaurant-PWA-Testing-Performs.git",
      demoLink: "https://mylovereto.netlify.app/",
      role: "Web Developer",
      highlights: [
        "Explore Restourant",
        "Favorit",
        "Countact",
        "Detail",
      ],
      _id:  6
    },
    {
      title: "Restourant",
      description: "Website restourant merupakan sebuah website yang menampilan beberapa list restourant dengn beberapa fitur seperti like restouran explore restourant",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/X82Hn5H/Resto.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
        "Progresive Web Apps (PWA)",
        "Image Loader",
        "End to End Testing E2E"
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Restaurant-PWA-Testing-Performs.git",
      demoLink: "https://muvieslove.netlify.app/",
      role: "Web Developer",
      highlights: [
        "Explore Restourant",
        "Favorit",
        "Countact",
        "Detail",
      ],
      _id:  6
    },
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
