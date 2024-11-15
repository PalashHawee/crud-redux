import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./productSlice";

const ProductCard = ({ product, onHandleSetProductToEdit }) => {
  const { id, title, quantity, price, description, category } = product;

  const dispatch = useDispatch();

  const handleEdit = (product) => {
    onHandleSetProductToEdit(product);
  };

  return (
    <Card
      key={id}
      className="w-full max-w-sm bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-gray-900">${price}</span>
        <span className="text-lg font-medium text-gray-600">
          Category: {category}
        </span>
        <span className="text-sm text-gray-600">In stock: {quantity}</span>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button
          onClick={() => dispatch(deleteProduct(id))}
          variant="primary"
          className="w-full mt-2 bg-purple-950 text-white"
        >
          Delete
        </Button>
        <Button
          onClick={() => handleEdit(product)}
          variant="primary"
          className="w-full mt-2 bg-purple-950 text-white"
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
