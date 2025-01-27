import { Link, useLocation } from "react-router-dom";
import "./Products.css";

const Products = (props) => {

  const location= useLocation();

  const EditButtons = (props) =>{
    return(
      <div className="buttons__admin">
      <Link to={`/admin/edit/${props.products.id}`}  className="btn btn-success">Edit</Link>
      <Link to={`/admin/delete/${props.products.id}`} className="btn btn-danger">Delete</Link>
    </div>
    )
  }
  return (
    <div className="container products">
      

    <div className="container products-list">
      {props.products.map((product) => (
        <Link to={`/products/${product.id}`} className="products__id">
          <div className="card" key={product.id}>
            <img
              src={"https://backendshop-o7ve.onrender.com/images/" + product.imageUrl}
              className="card-img-top"
              alt="..."
              />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.content}</p>
              <p className="card-text">{product.price}</p>
            </div>
            {location.pathname === '/admin' ? <EditButtons products={product} /> : null }
          </div>
        </Link>
      ))}
    </div>
      </div>
  );
};


export default Products;
