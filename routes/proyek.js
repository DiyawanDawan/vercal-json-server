const expess = require("express");
const router = expess.Router();

const proyekData = [

    {
      title: "Restourant",
      description: "Website restourant merupakan sebuah website yang menampilan beberapa list restourant dengn beberapa fitur seperti like restouran explore restourant",
      type: "Individual",
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
      demoLink: "https://mylovereto.netlify.app/",
      role: "Web Developer",
      highlights: [
        "Explore Restourant",
        "Favorit",
        "Countact",
        "Detail",
      ],
      _id:  1
    },
    {
      title: "Coffe Senja",
      description: "Merupakan sebuah website yang menampilkan list product coffe, dan kontaklokasi dengan gogle maps dan berbagai macan menu coffe",
      type: "Individual",
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
      _id:  2
    },
 
    {
      title: "Cynema",
      description: "Cynema merupakan sebuah proyek yang menampilkan list film dan acara TV, adapun data yangh di gunakan adalah open api dari omdb, website ini ada dua versi, yatu v1 menggunakan vanila javascript",
      type: "Individual",
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
      title: "Dashboard Data Analytics",
      description: "Website Analytics adalah sebuah website yang dimana membantu untuk mengalanisa data yang di dapatatkan dari sesnor ph dan nh3, website ini merupakan website dashboard IoT",
      type: "Individual",
      startDate: "2024-06-10",
      endDate: "2024-06-18",
      image: "https://i.ibb.co/Pjb66y5/Screenshot-196.png",
      technologies: [
        "Reac.js",
        "Tailwincss",
        "TaypeScript",
        "Apex Chart"
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Web-Bumiku.git",
    demoLink: "https://github.com/DiyawanDawan/Web-Bumiku.git",
      role: "Web Developer",
      highlights: [
        "Dashboard Analytics",
        "Filter Data With Date and Type",
        "Download Data",
        "Char Analisa"
      ],
      _id:  4
    },

    {
      title: "Muvie",
      description: "Website muvie merupakan sebuah website yang menampilan beberapa list muvie dengn beberapa fitur seperti like muvie dan push notfikasi",
      type: "Individual",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/f4Fp76v/muviv-v1.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
        "Progresive Web Apps (PWA)",
        "Image Loader",
        "End to End Testing E2E"
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Movie-Katalok-Testing.git",
      demoLink: "https://muvieslove.netlify.app/",
      role: "Web Developer",
      highlights: [
        "List Muvie",
        "Upcaming",
        "Top Rated",
        "Detail",
        "Subscribe Push Notification",
        "Progresive Web Apps (PWA)",
      ],
      _id:  5
    },
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
        repositoryLink: "https://github.com/DiyawanDawan/front-end-hemolife.git",
        demoLink: "http://hemolife.my.id",
        highlights: [
          "Find Blood Donors",
          "Find Blood Donation Schedules",
          "Become a volunteer Blood Donors",
        ],
      _id: 6
      },
    {
      title: "TOTO LIST",
      description: "Todo list adalah sebuah website catetean sederhana yang dapat menyimpan list TODO archive Todo di local storage browser ",
      type: "Individual",
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
      _id:  7
    },

    {
      title: "Clube Fedor",
      description: "Clube Fedor merupakan webste simole untuk lahihan memahami konsep komponen pada html jan javascrip dan menampilkan pencarian clube",
      type: "Individual",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co.com/1m7pkVg/Macbook-Air-clubevedor-netlify-app.png",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "WebPack",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Clube-Fedor",
      demoLink: "https://clubevedor.netlify.app/",
      role: "Web Developer",
      highlights: [
        "Card Clube",
        "Search Clube",
      ],
      _id:  8
    },

    {
      title: "Website Portal",
      description: "Terdapat elemen <header>, <footer>, <main>, <article>, dan <aside> di berkas HTML. Masing-masing elemen wajib berisi konten yang peruntukkannya sesuai dengan elemen tersebut (menerapkan konsep semantic HTML dalam menyusun struktur website). Contohnya: Tidak terdapat duplikasi elemen <main>. Elemen <main> harus berada diantara <header> dan <footer>. Harus terdapat elemen <header> sebelum <main> dan <footer> sesudah <main> Jika terdapat elemen <header> atau <footer> di dalam elemen <article> atau <aside>, maka hal tersebut diperbolehkan.",
      type: "Individual",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co/qdB2ZYc/Screenshot-213.png",
      technologies: [
        "HTML5",
        "CSS3",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Sunmishion-Dasar-Perograman-Web.git",
      demoLink: "https://diyawandawan.github.io/Sunmishion-Dasar-Perograman-Web/",
      role: "Web Developer",
      highlights: [
        "Header",
        "List Card",
        "Aside",
      ],
      _id:  9
    },
    {
      title: "StartMas Company Profile",
      description: "Merupakan sebuah website company profile sederhana yang menampilkan heder card services dan memiliki satu halaman",
       type: "Individual",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co/xhRRhnQ/Screenshot-214.png",
      technologies: [
        "HTML5",
        "CSS3",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/StartMas-copamy-profile.git",
      demoLink: "https://diyawandawan.github.io/StartMas-copamy-profile/",
      role: "Web Developer",
      highlights: [
        "Home",
        "About Us",
        "Package",
        "Facilities",
        "Gallery",
        "Footer"
      ],
      _id:  10
    },
    {
      title: "SUXZMAKEITEASY Company Profile",
      description: "Merupakan sebuah website company profile sederhana yang menampilkan heder card services dan memiliki satu halaman",
       type: "Individual",
       startDate: "0044-04-04",
      endDate: "0004-04-04",
      image: "https://i.ibb.co/7XBtkby/Screenshot-215.png",
      technologies: [
        "HTML5",
        "CSS3",
      ],
      repositoryLink: "https://github.com/DiyawanDawan/Project-Suxz-Company-Profile.git",
      demoLink: "https://diyawandawan.github.io/Project-Suxz-Company-Profile/",
      role: "Web Developer",
      highlights: [
        "Home", "Learnings", "About Us", "Testimonial"
      ],
      _id:  11
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
