import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import ProductCard from "./ProductCard";
const ProductListView = ({ onHandleSetProductToEdit }) => {
  const { products } = useSelector((state) => state.productsR);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 bg-gray-100">
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onHandleSetProductToEdit={onHandleSetProductToEdit}
            />
          );
        })}
    </div>
  );
};

export default ProductListView;
