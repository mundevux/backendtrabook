const pool = require("../trabookdb");

const getAllOfertas = async (req, res, next) => {
  try {
    const allOfertas = await pool.query("SELECT * FROM ofertas");
    res.json(allOfertas.rows);
  } catch (e) {
    next(e);
  }
};

const getAllPlanes = async (req, res, next) => {
  try {
    const allPlanes = await pool.query("SELECT * FROM planes");
    res.json(allPlanes.rows);
  } catch (e) {
    next(e);
  }
};

const getAllTestimonios = async (req, res, next) => {
  try {
    const allTestimonios = await pool.query("SELECT * FROM testimonios");
    res.json(allTestimonios.rows);
  } catch (e) {
    next(e);
  }
};

const getAllBlog = async (req, res, next) => {
  try {
    const allBlog = await pool.query("SELECT * FROM blog");
    res.json(allBlog.rows);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllOfertas,
  getAllPlanes,
  getAllTestimonios,
  getAllBlog,
};
