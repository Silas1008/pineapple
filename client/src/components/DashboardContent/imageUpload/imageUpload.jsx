import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    axios.get('http://localhost:8082/') 
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      axios.post('http://localhost:8082/upload', formData)
        .then(res => {
          if (res.data.Status === 'Success') {
            console.log('Image uploaded successfully!');
          } else {
            console.error('Failed to upload image. Server response:', res.data);
          }
        })
        .catch(err => {
          console.error('Error during image upload:', err);
        });
    } else {
      console.warn('No file selected for upload.');
    }
  };

  return (
    <div className='imageUpload'>
      <div>
        <input type='file' onChange={handleFile} />
        <button onClick={handleUpload}>Upload</button>
        <button>Delete</button>

        {data.map((item, index) => (
          <img key={index} src={`http://localhost:8082/img/${item.image}`} alt='' />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
