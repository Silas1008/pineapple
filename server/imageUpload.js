const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'imageuploads',
});

app.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ Message: 'No file uploaded.' });
    }

    const image = req.file.filename;
    const sql = 'INSERT INTO images (image) VALUES (?)';

    db.query(sql, [image], (err, result) => {
      if (err) {
        console.error('Database error during image upload:', err);
        return res.status(500).json({ Message: 'Internal Server Error' });
      }

      return res.json({ Status: 'Success', Message: 'Image uploaded successfully.' });
    });
  } catch (error) {
    console.error('Error during image upload:', error);
    return res.status(500).json({ Message: 'Internal Server Error' });
  }
});
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM images';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ Message: 'Internal Server Error' });
    }

    return res.json(result);
  });
});

app.listen(8082, () => {
  console.log('Image upload is running on port 8082');
});
