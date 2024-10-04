import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import Product from "../type/ProductType";

function Item(props: Product) {
  const contextType = useContext(CartContext);
  const { cart, product, addToCart, updateItemQuantity } = contextType;

  const [cartItem, setCartItem] = useState(
    cart.find((element) => element.id === props.id)
  );

  useEffect(() => {
    setCartItem(cart.find((element) => element.id === props.id));
  }, [cart,props.id]);

  if (!product || product.length === 0) {
    return <p>No products found.</p>;
  }

  const handleCart = useCallback(
    (product: Product) => {
      addToCart(product);
    },
    [cart]
  );

  return (
    <div className="w-60 shadow shadow-gray-300 m-3 text-center border-1">
      <Link to={`${props.id}`}>
        <img
          src={props.image}
          alt="Ethnic wear"
          className="w-56 h-56 p-3 ms-2"
        />
        <div className="mb-1 text-gray-900 font-semibold">{props.name}</div>
        <div className="mb-2 text-xl font-bold text-gray-900">
          Rs.{props.price}
        </div>
      </Link>
      {cartItem ? (
        <div className="flex justify-center items-center">
          <Button
            className="mr-2"
            varient="Teritory"
            onClick={() => updateItemQuantity(props.id, props.quantity)}
            name="-"
          ></Button>
          <span className="text-center w-8">{cartItem.quantity}</span>
          <Button
            className="ml-2"
            varient="Teritory"
            onClick={() => addToCart(props)}
            name="+"
          ></Button>
        </div>
      ) : (
        <Button
          onClick={() => handleCart(props)}
          varient="Secondary"
          name="Add to Cart"
        ></Button>
      )}
    </div>
  );
}

export default Item;
