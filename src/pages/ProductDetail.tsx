import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const contextType = useContext(CartContext);
  const { cart, product, addToCart, updateItemQuantity } = contextType;

  const productItem = product.find((item) => String(item.id) === productId);
  if (!productItem) {
    throw new Error("Error");
  }

  const [cartItem, setCartItem] = useState(
    cart.find((element) => element.id === productItem.id)
  );

  useEffect(() => {
    setCartItem(cart.find((element) => element.id === productItem.id));
  }, [cart, productItem.id]);

  if (!product || product.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="ml-4 flex relative top-24">
      <Button
        onClick={() => navigate(-1)}
        varient="Secondary"
        name="Go Back"
      ></Button>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <img
          className="w-64 mx-auto mt-3"
          src={productItem.image}
          alt="Product Image"
        />
        <div className="p-4">
          <h3 className="text-lg text-center font-medium mb-2">
            {productItem.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {productItem.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">Rs.{productItem.price}</span>
            {cartItem ? (
              <div className="flex justify-end items-center">
                <Button
                  className="mr-2"
                  varient="Teritory"
                  onClick={() =>
                    updateItemQuantity(productItem.id, productItem.quantity)
                  }
                  name="-"
                ></Button>
                <span className="text-center w-8">{cartItem.quantity}</span>
                <Button
                  className="ml-2"
                  varient="Teritory"
                  onClick={() => addToCart(productItem)}
                  name="+"
                ></Button>
              </div>
            ) : (
              <Button
                onClick={() => addToCart(productItem)}
                className="rounded"
                name="Add to Cart"
              ></Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
