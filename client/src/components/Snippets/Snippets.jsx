import React, { useContext } from 'react';
import { CourseContext } from '../../Context/CourseContextProvider'
import { useParams } from 'react-router-dom';

const Snippets = () => {
  const { id } = useParams();
  const { PRODUCTS } = useContext(CourseContext);
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title} Snippets</h1>
      <pre>{product.snippets}</pre>
    </div>
  );
};

export default Snippets;
