const { Router } = require("express");

const {
  getAllOfertas,
  getAllPlanes,
  getAllTestimonios,
  getAllBlog,
} = require("../controllers/trabook.controllers");

const router = Router();

router.get("/ofertas", getAllOfertas);
router.get("/planes", getAllPlanes);
router.get("/testimonios", getAllTestimonios);
router.get("/blog", getAllBlog);

module.exports = router;
