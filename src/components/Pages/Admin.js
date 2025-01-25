import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import Products from "./Products";
import "./Admin.css";

const Admin = (props) => {
  const {products, onAddProduct} = props;

  const [isEditing, setIsEditing] = useState(false);

  const formHandle = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="add-product__button">
        {!isEditing && (
          <button className="btn btn-success" onClick={formHandle}>
            Add Product
          </button>
        )}
        {isEditing && <AddProductForm onCancel={stopEditing} onAddProduct={onAddProduct} />}
      </div>
      <div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Admin;
