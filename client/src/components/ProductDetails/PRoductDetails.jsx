import React, { useContext, useState, useEffect } from 'react';
import { CourseContext } from '../../Context/CourseContextProvider';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const { PRODUCTS } = useContext(CourseContext);
  const [product, _] = useState(PRODUCTS.find((p) => p.id === parseInt(id)));
  const [isCheckbox1Checked, setCheckbox1Checked] = useState(false);
  const [isCheckbox2Checked, setCheckbox2Checked] = useState(false);

  useEffect(() => {
   
    const storedDoneStatus = localStorage.getItem(`doneStatus_${id}`);
    if (storedDoneStatus) {
      setCheckbox1Checked(storedDoneStatus === 'true');
      setCheckbox2Checked(storedDoneStatus === 'true');
    }
  }, [id]);

  const enable = () => {
    const doneButton = document.getElementById("done-btn");

    if (isCheckbox1Checked && isCheckbox2Checked) {
      doneButton.removeAttribute('disabled');
    } else {
      doneButton.setAttribute('disabled', 'true');
    }
  };

  const handleCheckboxChange = (checkboxName, isChecked) => {
    if (checkboxName === 'check1') {
      setCheckbox1Checked(isChecked);
    } else if (checkboxName === 'check2') {
      setCheckbox2Checked(isChecked);
    }
  };

  const handleDoneButtonClick = () => {
    localStorage.setItem(`doneStatus_${id}`, 'true');
   };

  return (
    <div className='learning-data'>
      <div className='right-content'>
        <h1>{product.title}</h1>

        <div className='product-content'>
          <p className='productContent'>{product.content}</p>

          <div className="allContent">
            <div className='product-snip'>
              <div>
                <div className='product-snippets'>
                  Snippets: {product.snippets}
                  <input
                    type='checkbox'
                    id='check1'
                    checked={isCheckbox1Checked}
                    onChange={(e) => {
                      handleCheckboxChange('check1', e.target.checked);
                      enable();
                    }}
                  />
                </div>
              </div>

              <div>
                <div className='product-snippets1'>
                  Snippets: {product.snippets1}
                  <input
                    type='checkbox'
                    id='check2'
                    checked={isCheckbox2Checked}
                    onChange={(e) => {
                      handleCheckboxChange('check2', e.target.checked);
                      enable();
                    }}
                  />
                </div>
              </div>
              <Link to='/dashboard'><button
              disabled={!isCheckbox1Checked || !isCheckbox2Checked}
              id='done-btn'
              onClick={handleDoneButtonClick}
            >
              Done
            </button></Link>
            </div>

            <div className='left-content'>
              <img src={product.img} alt={product.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
