import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import './App.css';
import { Button, Checkbox, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const ProductCreation = () => {
  // State variables
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productAvailable, setProductAvailable] = useState(false);
  const [productExpirationDate, setProductExpirationDate] = useState('');
  const [productCategories, setProductCategories] = useState('');

  const createProduct = async function () {
    try {
      // These values come from state variables
      // Convert data values to corresponding data types
      const productNameValue = productName;
      const productQuantityValue = Number(productQuantity);
      const productPriceValue = Number(productPrice);
      const productAvailableValue = productAvailable;
      const productExpirationDateValue = new Date(productExpirationDate);
      const productCategoriesValue = productCategories.split(',');
  
      // Creates a new Product parse object instance
      let Product = new Parse.Object('Product');
  
      // Set data to parse object
      Product.set('name', productNameValue);
      Product.set('quantity', productQuantityValue);
      Product.set('price', productPriceValue);
      Product.set('available', productAvailableValue);
      Product.set('expirationDate', productExpirationDateValue);
      Product.set('categories', productCategoriesValue);
      Product.set('completeData', {
        name: productNameValue,
        quantity: productQuantityValue,
        price: productPriceValue,
        available: productAvailableValue,
        expirationDate: productExpirationDateValue,
        categories: productCategoriesValue,
      });
  
      // After setting the values, save it on the server
      try {
        let savedProduct = await Product.save();
        // Success
        alert(`Success! ${JSON.stringify(savedProduct)}`);
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
      }
    } catch (error) {
      // Error can be caused by wrong type of values in fields
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div>
      <div className="header">
        <img
          className="header_logo"
          alt="Back4App Logo"
          src={
            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
          }
        />
        <p className="header_text_bold">{'React on Back4App'}</p>
        <p className="header_text">{'Product Creation'}</p>
      </div>
      <div className="container">
        {/* Product field inputs */}
        <div className="flex_between">
          <h2 className="list_heading">Available?</h2>
          <Checkbox
            onChange={(e) => setProductAvailable(e.target.checked)}
          ></Checkbox>
        </div>
        <div className="form_wrapper">
          <Input
            className="form_input"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            placeholder="Name"
            size="large"
          />
          <Input
            className="form_input"
            value={productQuantity}
            onChange={(event) => setProductQuantity(event.target.value)}
            placeholder="Quantity"
            size="large"
          />
          <Input
            className="form_input"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
            placeholder="Price"
            size="large"
          />
          <Input
            className="form_input"
            value={productExpirationDate}
            onChange={(event) => setProductExpirationDate(event.target.value)}
            placeholder="Expiration Date (mm/dd/yyyy)"
            size="large"
          />
          <Input
            className="form_input"
            value={productCategories}
            onChange={(event) => setProductCategories(event.target.value)}
            placeholder="Categories (separated by comma)"
            size="large"
          />
          {/* Add product button */}
          <Button
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size={'large'}
            onClick={createProduct}
            icon={<PlusOutlined />}
          >
            CREATE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
};