const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Creacion de la tabla de ofertas

const createTableOfertas = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS ofertas (
        id SERIAL PRIMARY KEY,
        imagenDestino VARCHAR(255) NOT NULL,
        ciudad VARCHAR(255) NOT NULL,
        imagenStar VARCHAR(255) NOT NULL,
        calificacion VARCHAR(255) NOT NULL,
        imagenUbicacion VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        precio VARCHAR(255) NOT NULL,
        descuento VARCHAR(255) NOT NULL
      )`
    );
    console.log("Tabla ofertas creada");
  } catch (e) {
    console.log(e);
  }
};

// Creacion de la tabla Planes Vacacionales

const createTablePlanes = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS planes (
        id SERIAL PRIMARY KEY,
        imagenDestino VARCHAR(255) NOT NULL,
        ciudad VARCHAR(255) NOT NULL,
        precio VARCHAR(255) NOT NULL,
        imagenDuracion VARCHAR(255) NOT NULL,
        duracion VARCHAR(255) NOT NULL,
        imagenStar VARCHAR(255) NOT NULL,
        calificacion VARCHAR(255) NOT NULL
      )`
    );
    console.log("Tabla planes creada");
  } catch (e) {
    console.log(e);
  }
};

// Creacion de la tabla Testimonios

const createTableTestimonios = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS testimonios (
        id SERIAL PRIMARY KEY,
        imagenUsuario VARCHAR(255) NOT NULL,
        nombre VARCHAR(255) NOT NULL,
        locacion VARCHAR(255) NOT NULL,
        testimonio VARCHAR(255) NOT NULL
      )`
    );
    console.log("Tabla testimonios creada");
  } catch (e) {
    console.log(e);
  }
};

// Creación de la tabla Blog

const createTableBlog = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS blog (
        id SERIAL PRIMARY KEY,
        imagenBlog VARCHAR(255) NOT NULL,
        titulo VARCHAR(255) NOT NULL,
        fecha VARCHAR(255) NOT NULL
      )`
    );
    console.log("Tabla blog creada");
  } catch (e) {
    console.log(e);
  }
};

// Incluir infromacion en la tabla ofertas

const insertOfertas = async () => {
  try {
    await pool.query(
      `INSERT INTO ofertas (imagenDestino, ciudad, imagenStar, calificacion, imagenUbicacion, location, precio, descuento) VALUES
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/madrid_vrjie3.jpg', 'Madrid', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8', 'https://svgsilh.com/svg/1093169.svg', 'Spain', '$950', '$850'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/Firenze_tz5uln.jpg', 'Firenze', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8', 'https://svgsilh.com/svg/1093169.svg', 'Italy', '$$850', '$750'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/paris_ogojvu.jpg', 'Paris', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8', 'https://svgsilh.com/svg/1093169.svg', 'France', '$699', '$599'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/london_zkrldm.jpg', 'London', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8', 'https://svgsilh.com/svg/1093169.svg', 'UK', '$850', '$850')
      `
    );
    console.log("Datos insertados en la tabla ofertas");
  } catch (e) {
    console.log(e);
  }
};

// Incluir infromacion en la tabla planes

const insertPlanes = async () => {
  try {
    await pool.query(
      `INSERT INTO planes (imagenDestino, ciudad, precio, imagenDuracion, duracion, imagenStar, calificacion) VALUES
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/rome_ped1ew.jpg', 'Rome, Italy', '$5,42k', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '10 Days Trip', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685392490/Discounts/london_zkrldm.jpg', 'London, UK', '$2,42k', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '7 Days Trip', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685393431/Osaka_stengg.jpg', 'Osaka, Japan', '$5,42k', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '10 Days Trip', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Yellow_Star_with_rounded_edges.svg', '4.8')
      `
    );
    console.log("Datos insertados en la tabla planes");
  } catch (e) {
    console.log(e);
  }
};

// Incluir infromacion en la tabla testimonios

const insertTestimonios = async () => {
  try {
    await pool.query(
      `INSERT INTO testimonios (imagenUsuario, nombre, locacion, testimonio) VALUES
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405604/avatar-1_lviojy.png', 'Mike Taylor', 'Lahore, Pakistan', 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405604/avatar-1_lviojy.png', 'Mike Taylor', 'Lahore, Pakistan', 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685405604/avatar-1_lviojy.png', 'Mike Taylor', 'Lahore, Pakistan', 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.')
      `
    );
    console.log("Datos insertados en la tabla testimonios");
  } catch (e) {
    console.log(e);
  }
};

// Incluir infromacion en la tabla blog

const insertBlog = async () => {
  try {
    await pool.query(
      `INSERT INTO blog (imagenBlog, titulo, fecha) VALUES
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397344/blog-8_agdeiv.png', 'The Amazing Difference a Year of Travelling.', 'July 27, 2021'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397344/blog-7_iirlxw.png', 'Travel far enough, you meet yourself.', 'August 27, 2021'),
      ('https://res.cloudinary.com/sfuentes-dev16/image/upload/v1685397343/blog-5_i5orcy.png', 'How to Save Money While Visiting Africa.', 'September 27, 2021')
      `
    );
    console.log("Datos insertados en la tabla blog");
  } catch (e) {
    console.log(e);
  }
};

// Funcion para insertar datos en las tablas despues de creadas las tablas

const insertData = async () => {
  try {
    await createTableOfertas();
    await createTablePlanes();
    await createTableTestimonios();
    await createTableBlog();

    console.log("Todas las tablas han sido creadas.");

    // Ahora que las tablas están creadas, ejecutamos las funciones de inserción
    await insertOfertas();
    await insertPlanes();
    await insertTestimonios();
    await insertBlog();

    console.log("Inserciones completadas.");
  } catch (error) {
    console.error("Error:", error);
  }
};

insertData();

module.exports = pool;
