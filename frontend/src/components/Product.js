import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      {/* <div
        to="/product-detail/:id"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <div className="col-5">
          <img src={product.image} className="card-img-top" alt="..." />
        </div>
      </div> */}
      <div className="card-body d-flex flex-column justify-content-end">
        <h5 className="card-title text-center">
          {product.name.substring(0, 20)}
        </h5>
        <p className="card-text text-center">${product.price}</p>
        <Link to="/cart" className="btn btn-primary">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
