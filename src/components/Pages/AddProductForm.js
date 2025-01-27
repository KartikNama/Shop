import React, {useState} from "react";
import './AddProductForm.css';
import axios from "axios";
const AddProductForm = (props) => {

  const { onAddProduct} = props
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const [enteredImage, setEnteredImage] = useState(null);
  const [enteredPrice, setEnteredPrice] = useState('');

  const titleChangeHandler = (e) =>{
    setEnteredTitle(e.target.value)
  }
  const contentChangeHandler = (e) =>{
    setEnteredContent(e.target.value)

  }
  const imageChangeHandler = (e) =>{
    const file = e.target.files[0]
    setEnteredImage(file);
  }
  const priceChangeHandler = (e) =>{
    setEnteredPrice(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const newProduct = new FormData();
    newProduct.append('title', enteredTitle);
    newProduct.append('content', enteredContent);
    newProduct.append('price', enteredPrice);
    newProduct.append('image', enteredImage);
    try {
      const response = await axios.post("https://backendshop-o7ve.onrender.com/api/products", newProduct,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if(response.status=== 201){
        console.log("Product added successfully", response.data)
        onAddProduct(response.data);
      }else{
        
        console.error("failed to add")
      }
    }
    catch(error){
      console.error("Error adding product", error);
    }
    
  };

  return (
    <div className="container form-container m-auto">
      <form onSubmit={submitHandler}>
        <div className="form__ins">
          <div className="productadd__element">
            <label>Title</label>
            <input type="text" value={enteredTitle} className="product__area" onChange={titleChangeHandler} />
          </div>
          <div className="productadd__element">
            <label>Content</label>
            <input type="text" value={enteredContent} className="product__area"  onChange={contentChangeHandler} />
          </div>
          <div className="productadd__element">
            <label>Image</label>
            <input type="file" className="product__area"  onChange={imageChangeHandler} />
          </div>
          <div className="productadd__element">
            <label>Price</label>
            <input type="number" value={enteredPrice} className="product__area"  onChange={priceChangeHandler} />
          </div>

        </div>
          <button className="btn btn-success" type="submit">Add Product</button>
      <button className="btn btn-danger" onClick={props.onCancel}>
        Cancel
      </button>
      </form>
    </div>
  );
};

export default AddProductForm;
