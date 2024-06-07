const express = require("express");
const router = express.Router();

const certificatesData = [
  {
    _id: 1,
    name: "Introduction to HTML, CSS, & JavaScript",
    penerbit: "Coursera at IBM",
    urlCredential: "https://coursera.org/verify/63JUDFJS3BU4",
    image: "https://i.ibb.co.com/k8Z3wRk/Coursera-63-JUDFJS3-BU4.jpg"
  },
  {
    _id: 2,
    name: "Introduction to Front-End Development",
    penerbit: "Coursera at Meta",
    urlCredential: "https://coursera.org/verify/DU73KF7YFZAQ",
    image: "https://i.ibb.co.com/crGWzKK/Coursera-DU73-KF7-YFZAQ.jpg"
  },
  {
    _id: 3,
    name: "Programming with JavaScript",
    penerbit: "Coursera at Meta",
    urlCredential: "https://coursera.org/verify/JNFYSZ86BVCH",
    image: "https://i.ibb.co.com/GR11xGV/sertifikat-course-191-1324887-290423081951.jpg"
  },
  {
    _id: 4,
    name: "Coursera HTML and CSS in depth",
    penerbit: "Coursera at Meta",
    urlCredential: "https://coursera.org/verify/6K5S4MFCPAZF",
    image: "https://i.ibb.co.com/D9T4X86/Coursera-HTML-and-CSS-in-depth-DU73-KF7-YFZAQ.jpg"
  },
  {
    _id: 5,
    name: "Version Control",
    penerbit: "Coursera at Meta",
    urlCredential: "https://coursera.org/verify/U23SH79P98Z4",
    image: "https://i.ibb.co.com/W25rCq5/Coursera-U23-SH79-P98-Z4.jpg"
  },

];

router.get("/certificate", (req, res) => {
  res.send(blogsData);
});


router.get("/certificate/:id", (req, res) => {
  const certificateId = parseInt(req.params.id);
  const singleSertificate = certificatesData.find((item) => item._id === certificateId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singleSertificate);
});

module.exports = router;
