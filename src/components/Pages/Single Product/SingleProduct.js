import { useParams } from "react-router-dom"

const SingleProduct = ({products}) => {
    const {productId } = useParams();
   const product = products.find((prod) => prod.id === parseInt(productId));
   console.log("./products-images/" + product.imageUrl);

    return(
        <div className="container">
            <img src={"http://localhost:8080/images" + product.imageUrl} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.content}</p>
            <p>{product.price}</p>
        </div>
    )
}


export default SingleProduct