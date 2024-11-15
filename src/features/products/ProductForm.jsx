//@ts-nocheck

import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "./productSlice";

const ProductForm = ({ productToEdit = {}, isEdit = false }) => {
  //   console.log(productToEdit);
  const [product, setProduct] = useState({
    title: productToEdit.title || "",
    description: productToEdit.description || "",
    price: productToEdit.price || "",
    category: productToEdit.category || "",
    quantity: productToEdit.quantity || "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct({
        title: productToEdit.title || "",
        description: productToEdit.description || "",
        price: productToEdit.price || "",
        category: productToEdit.category || "",
        quantity: productToEdit.quantity || "",
      });
    }
  }, [productToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      dispatch(updateProduct({ id: productToEdit.id, product: product }));
    } else {
      dispatch(createProduct({ ...product, id: nanoid() }));
    }

    // console.log({ ...product, id: nanoid() });
    // Add your submission logic here (e.g., API call)
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            step="0.01"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {isEdit ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
